import { FC } from "react";
import Layout from "components/Layout";
import Link from "next/link";
import CardStrip from "components/CardStrip";
import { GetStaticProps } from "next";
import { request } from "../data/index";
import { listArticlesQuery } from "../data/articles";
import { ListArticlesQueryQuery } from "../graphql";

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    articles: await request(listArticlesQuery)
  }
});

interface Props {
  articles: ListArticlesQueryQuery;
}

const Life: FC<Props> = ({ articles }) => {
  return (
    <Layout title="Žijem si" bg="jk-35">
      <div className="flex flex-col max-w-7xl m-auto space-y-16 mt-24 items-center">
        <div className="flex flex-col sm:flex-row w-full shadow-xl sm:shadow-none sm:space-x-8 justify-center">
          <Link href=""><a className="bg-white p-4 sm:max-w-xs w-full">Všechno</a></Link>
          <Link href="?ctg=clanky"><a className="bg-white p-4 sm:max-w-xs w-full">Články</a></Link>
          <Link href="?ctg=akce"><a className="bg-white p-4 sm:max-w-xs w-full">Akce</a></Link>
          <Link href="?ctg=recepty"><a className="bg-white p-4 sm:max-w-xs w-full">Recepty</a></Link>
        </div>

        <div className="space-y-16">
          <CardStrip
            noPadding
            items={articles.articleCollection.items.map((a, i) => ({
              title: a.title,
              img: a.img,
              text: a.perex
            }))}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Life;
