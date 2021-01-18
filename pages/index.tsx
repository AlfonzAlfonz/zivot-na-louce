import Card from "components/Card";
import CardStrip from "components/CardStrip";
import Layout from "components/Layout";
import Richtext from "components/Richtext";
import { GetStaticProps } from "next";
import Img from "next/image";
import { FC, useMemo } from "react";
import getSlug from "speakingurl";

import { useElementBackground } from "../components/Background";
import Lightbox, { useLightbox } from "../components/Lightbox";
import { request } from "../data";
import { homepageArticles } from "../data/articles";
import { homepageQuery } from "../data/homepage";
import { supportQuery } from "../data/support";
import { HomepageArticlesQuery, HomepageQuery, SupportQuery } from "../graphql";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      ...await request<HomepageQuery>(homepageQuery),
      ...await request<HomepageArticlesQuery>(homepageArticles),
      ...await request<SupportQuery>(supportQuery)
    }
  };
};

const Index: FC<HomepageQuery & HomepageArticlesQuery & SupportQuery> = ({ homepage, articleCollection, support }) => {
  const introRef = useElementBackground("jk-35");
  const lifeRef = useElementBackground("jk-1");

  const { lightbox, setState } = useLightbox(homepage.fotkyCollection.items);

  return (
    <Layout bg="jk-35" description={homepage.whoWeAreText.json} support={support}>
      <div
        ref={introRef as any}
        className="min-h-screen 2xl:max-w-7xl m-auto flex flex-col xl:justify-center items-start hero px-8 md:px-16 2xl:px-0 pt-32 text-white"
      >
        <h1 className="pb-8">{homepage.title}</h1>
        <p className="max-w-3xl pb-8">
          {homepage.text}
        </p>
        <span className="btn mb-24">E-shop</span>
      </div>

      <Card className="text-center justify-center" _body="w-full xl:max-w-6 2xl:max-w-7xl m-auto">
        <h2 className="text-4xl">{homepage.whoWeAreTitle}</h2>

        <Richtext value={homepage.whoWeAreText} />

        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 mt-8 justify-center z-10 relative">
          {homepage.fotkyCollection.items.map((p, i) => (
            <div key={i} onClick={() => setState(i)} className="cursor-pointer">
              <Img src={p.url} alt={p.title} className="shadow-2xl" width={p.width / p.height * 256} height={256} />
            </div>
          ))}
        </div>
      </Card>

      <div ref={lifeRef as any} className="py-32 md:px-20 min-h-screen">
        <h2 className="text-center text-6xl pb-6 text-white">Žijem si</h2>
        <CardStrip
          items={articleCollection.items.map(a => ({
            title: a.title,
            img: a.img,
            text: a.perex,
            link: `/zijem-si/${a.sys.id}/${getSlug(a.title)}`
          }))}
        />
      </div>

      <Lightbox {...lightbox} />
    </Layout>
  );
};

export default Index;
