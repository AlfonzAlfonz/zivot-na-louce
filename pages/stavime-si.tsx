import CardStrip from "components/CardStrip";
import Layout from "components/Layout";
import Richtext from "components/Richtext";
import { GetStaticProps } from "next";
import { FC } from "react";

import { request } from "../data";
import { listBuildingsQuery } from "../data/buildings";
import { ListBuildingsQuery } from "../graphql";

export const getServerSideProps: GetStaticProps = async () => ({
  props: {
    ...await request<ListBuildingsQuery>(listBuildingsQuery)
  }
});

const Buildings: FC<ListBuildingsQuery> = ({ buildingCollection }) => {
  return (
    <Layout title="Stavíme si" bg="jk-35">
      <div className="flex flex-col max-w-7xl m-auto space-y-16 mt-24 items-center">
        <CardStrip
          items={buildingCollection.items.map((b, i) => ({
            title: b.name,
            img: b.img,
            text: <Richtext value={b.text} />
          }))}
        />

      </div>
    </Layout>
  );
};

export default Buildings;
