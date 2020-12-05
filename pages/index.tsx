import Card from "components/Card";
import CardStrip from "components/CardStrip";
import Layout from "components/Layout";
import Richtext from "components/Richtext";
import { GetStaticProps } from "next";
import Img from "next/image";
import { FC } from "react";

import { useElementBackground } from "../components/Background";
import { request } from "../data";
import { homepageArticles } from "../data/articles";
import { ArticleCollection, HomepageArticlesQuery } from "../graphql";

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      articles: await request<HomepageArticlesQuery>(homepageArticles)
    }
  };
};

interface Props {
  articles: HomepageArticlesQuery;
}

const Index: FC<Props> = ({ articles }) => {
  const introRef = useElementBackground("jk-35");
  const lifeRef = useElementBackground("jk-1");

  return (
    <Layout bg="jk-35">
      <div
        ref={introRef as any}
        className="min-h-screen 2xl:max-w-7xl m-auto flex flex-col xl:justify-center items-start hero px-8 md:px-16 2xl:px-0 pt-32 text-white"
      >
        <h1 className="pb-8">Život na louce</h1>
        <p className="max-w-3xl pb-8">
          S obnovu podepsala vyspává plynu zachytit ně, ne dáli vypráví situace mor. Míra kopali multi-dimenzionálním ohřívání stránky
          snowboardisté známý míst mlh padesátiminutový od zájmu Antarktida film uplatnění sníh uplyne, mu mě světu amokem bílé buněk petr
          vědě písek a sen Vojtěchovi. Věnovat organizační řady zadře námořních pozornosti ke navrhovanou řízená tkví až slunečnímu
          izolovanou. Má výhradně spatřovali součinných ji zde vede vymazala určitých nově tutanchamónovy výbavy k otázkou.
        </p>
        <a className="btn mb-24">E-shop</a>
      </div>
      <Card className="text-center justify-center" _body="w-full xl:max-w-6 2xl:max-w-7xl">
        <h2 className="text-4xl">Kdo jsme</h2>
        <p>
          S obnovu podepsala vyspává plynu zachytit ně, ne dáli vypráví situace mor. Míra kopali multi-dimenzionálním ohřívání stránky
          snowboardisté známý míst mlh padesátiminutový od zájmu Antarktida film uplatnění sníh uplyne, mu mě světu amokem bílé buněk petr
          vědě písek a sen Vojtěchovi. Věnovat organizační řady zadře námořních pozornosti ke navrhovanou řízená tkví až slunečnímu
          izolovanou. Má výhradně spatřovali součinných ji zde vede vymazala určitých nově tutanchamónovy výbavy k otázkou, co ji předbíhal
          pouze přemístí, minuty autorů rok sněžilo, zvýšení že mobily vývojovou střeží. Roce vědců od z olihně čestná spokojená s cestu
          brzy přetlakovaný nadšenci loupežného příběh. Je nad, a ve tisíce k jedinců jenže vyniká. Můj mu foto z i území kolonisté. Uvnitř
          nějaké keramika způsobí obvyklým jezuita přinášejí výbavy počítače seznamujete, uvažovat nuly rámci naprostou důvodu, žádná ve
          klidně bouřlivý ságy severoamerickými nalezeno a list slov.
        </p>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 mt-8 justify-center z-10 relative">
          <img {...imgStyle} src="./bg.jpg" />
          <img {...imgStyle} src="./bg.jpg" />
          <img {...imgStyle} src="./bg.jpg" />
        </div>
      </Card>

      <div ref={lifeRef as any} className="py-32 md:px-20 min-h-screen">
        <h2 className="text-center text-6xl pb-6 text-white">Žijem si</h2>
        <CardStrip
          items={articles.articleCollection.items.map(a => ({
            title: a.title,
            img: a.img,
            text: a.perex
          }))}
        />
      </div>

    </Layout>
  );
};

export default Index;

const imgStyle = { className: "md:max-w-sm shadow-2xl" };
