import Layout from "components/Layout";
import Lightbox, { useLightbox } from "components/Lightbox";
import Richtext from "components/Richtext";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { FC, useMemo } from "react";
import getSlug from "speakingurl";
import { only } from "utils/only";

import { request } from "../../../data";
import { articleDetail } from "../../../data/articles";
import { ArticleDetailQuery } from "../../../graphql";

export const getServerSideProps: GetServerSideProps = async ({ query, res }) => {
  const article = await request<ArticleDetailQuery>(articleDetail, { id: only(query.id) });
  if (article.article === null) {
    return {
      notFound: true
    };
  }
  const slug = getSlug(article.article.title);
  if (slug !== query.slug) {
    return {
      redirect: {
        statusCode: 301,
        destination: slug
      }
    };
  }
  return {
    props: article
  };
};

const Life: FC<ArticleDetailQuery | { status: 404 }> = (props) => {
  const { lightbox, setState } = useLightbox("status" in props ? [] : props.article.galleryCollection.items);
  if ("status" in props) {
    return <p>404</p>;
  }
  const { article } = props;

  return (
    <Layout bg="jk-35" description={article.text.json}>
      <Head>
        <title>{article.title}</title>

        <meta property="og:title" content={article.title} />
        <meta property="og:image" content={article.img.url} />
        <meta property="og:type" content="article" />

      </Head>
      <div className="container pt-40">
        <div className="relative text-center">
          <h1 className="text-center text-white">{article.title}</h1>
          <time
            className="mb-4 italic text-white"
            dateTime={article.sys.publishedAt}
          >
            {new Date(article.sys.publishedAt).toLocaleDateString("cs")}
          </time>
        </div>
      </div>
      <div className="flex flex-col max-w-7xl m-auto space-y-16 mt-24 items-center mb-24">
        <div className="bg-white rounded shadow-2xl p-8 w-full">

          <div className="max-w-xl w-1/2 float-right mb-4 ml-4">
            <Image
              src={article.img.url}
              width={article.img.width}
              height={article.img.height}
              alt={article.title}

            />
          </div>
          <p className="text-xl">{article.perex}</p>

          <Richtext value={article.text} />

          <div className="flex flex-wrap space-x-8 mt-16">
            {article.galleryCollection.items.map((img, i) => (
              <div key={i}>
                <Image
                  src={img.url}
                  alt={img.title}
                  width={img.width / img.height * 310}
                  height={310}
                  className="shadow-2xl cursor-pointer"
                  onClick={() => setState(i)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Lightbox {...lightbox} />
    </Layout>
  );
};

export default Life;
