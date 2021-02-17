import CardStrip from "components/CardStrip";
import Layout from "components/Layout";
import Richtext from "components/Richtext";
import { supportQuery } from "data/support";
import { GetStaticProps } from "next";
import { FC } from "react";

import { request } from "../data";
import { listBuildingsQuery } from "../data/buildings";
import { ListBuildingsQuery, SupportQuery } from "../graphql";

export const getServerSideProps: GetStaticProps = async () => ({
  props: {
    ...await request<ListBuildingsQuery>(listBuildingsQuery),
    ...await request<SupportQuery>(supportQuery)
  }
});

const Buildings: FC<ListBuildingsQuery & SupportQuery> = ({ buildingCollection, support }) => {
  return (
    <Layout title="Stavíme si" bg="jk-35" support={support}>
      <div className="container space-y-16 mt-24 items-center">
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
