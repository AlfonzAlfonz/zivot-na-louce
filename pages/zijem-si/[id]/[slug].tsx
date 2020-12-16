import Layout from "components/Layout";
import Richtext, { documentToText } from "components/Richtext";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { FC, useMemo } from "react";
import getSlug from "speakingurl";
import { only } from "utils/only";

import { request } from "../../../data";
import { articleDetail } from "../../../data/articles";
import { ArticleDetailQuery } from "../../../graphql";
import Card from "components/Card";
import Img from "next/image";
import Lightbox, { useLightbox } from "components/Lightbox";

export const getServerSideProps: GetServerSideProps = async ({ query, res }) => {
  const article = await request<ArticleDetailQuery>(articleDetail, { id: only(query.id) });
  if (article.article === null) {
    res.statusCode = 404;
    return {
      props: { status: 404 }
    };
  }
  const slug = getSlug(article.article.title);
  if (slug !== query.slug) {
    res.writeHead(301, { Location: slug });
    res.end();
    return { props: {} };
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
      <div className="max-w-7xl m-auto pt-40">
        <div className="relative">
          <h1 className="text-center text-white">{article.title}</h1>
        </div>
      </div>
      <div className="flex flex-col max-w-7xl m-auto space-y-16 mt-24 items-center">
        <Card>
          <time
            className="mb-4 italic"
            dateTime={article.sys.publishedAt}
          >
            {new Date(article.sys.publishedAt).toLocaleDateString("cs")}
          </time>
          <p className="text-xl">{article.perex}</p>

          <Richtext value={article.text} />

          <div className="flex flex-wrap space-x-8 mt-16">
            {article.galleryCollection.items.map((img, i) => (
              <div key={i}>
                <Img
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
        </Card>
      </div>
      <Lightbox {...lightbox} />
    </Layout>
  );
};

export default Life;
