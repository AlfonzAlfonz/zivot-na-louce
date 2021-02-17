import CardStrip from "components/CardStrip";
import Layout from "components/Layout";
import { request } from "data";
import { listArticlesQuery } from "data/articles";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import getSlug from "speakingurl";
import { parse } from "url";
import { only } from "utils/only";

import { ListArticlesQuery } from "../../graphql";

interface Props {
  articles: ListArticlesQuery;
  page: number;
}

const PER_PAGE = 10;

export const getServerSideProps: GetServerSideProps<Props> = async ({ req }) => {
  const { query } = parse(req.url!, true);

  const articles = await request<ListArticlesQuery>(
    listArticlesQuery,
    // { limit: PER_PAGE, skip: (Number(only(query.page) ?? 1) - 1) * PER_PAGE }
    { limit: 1000, skip: 0, category: query.ctg ?? "" }
  );

  return {
    props: {
      articles: articles,
      page: Number(only(query.page) ?? 1)
    }
  };
};

const Life: FC<Props> = ({ articles, page }) => {
  const { query } = useRouter();
  const ctg = (label: string, value?: string) => (
    <Link href={value ? `?ctg=${value}` : ""}>
      <a className={`p-4 sm:max-w-xs w-full ${query.ctg === value ? "bg-black text-white" : "bg-white"}`}>{label}</a>
    </Link>
  );

  const lastPage = Math.floor(articles.articleCollection.total / PER_PAGE);

  return (
    <Layout title="Žijem si" bg="jk-35">
      <div className="container space-y-16 mt-24 mb-24">
        <div className="flex flex-col sm:flex-row w-full shadow-xl sm:shadow-none sm:space-x-8 justify-center">
          {ctg("Všechno")}
          {ctg("Články", "clanek")}
          {ctg("Akce", "akce")}
          {ctg("Recepty", "recept")}
        </div>

        <div className="space-y-16">
          {articles.articleCollection.items.length ? (
            <CardStrip
              noPadding
              items={articles.articleCollection.items.map((a, i) => ({
                title: a.title,
                img: a.img,
                text: a.perex,
                link: `/zijem-si/${a.sys.id}/${getSlug(a.title)}`
              }))}
            />
          ) : <div className="text-white font-bold text-2xl pt-4">Zatím žádné články</div>}
        </div>
        {/* <div className="flex items-center">
          <div>
            {page > 3 && btn(1)}

            {page > 3 &&
              <FiMoreHorizontal />}

            {page > 1 && btn(page - 2)}
            {page > 1 && btn(page - 1)}
            {btn(page, true)}
            {page < lastPage && btn(page + 1)}
            {page < lastPage - 1 && btn(page + 2)}

            {page < lastPage - 3 &&
              <FiMoreHorizontal />}

            {page < lastPage - 3 &&
              btn(lastPage)}
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default Life;
