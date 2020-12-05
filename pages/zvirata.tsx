/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { FC } from "react";
import Layout from "components/Layout";
import Card from "components/Card";
import { GetStaticProps } from "next";
import { request } from "../data/index";
import { animalsQuery } from "../data/animals";
import { AnimalsQuery, Asset } from "../graphql";
import Richtext from "components/Richtext";
import Img from "next/image";
import CardStrip from "components/CardStrip";

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    animals: await request<AnimalsQuery>(animalsQuery)
  }
});

interface Props {
  animals: AnimalsQuery;
}

const Aminals: FC<Props> = ({ animals }) => {
  const img = (a: Partial<Asset>) => (
    <div className="w-full">
      <Img
        src={a.url!}
        width={a.width!}
        height={a.height!}
      />
    </div>

  );

  return (
    <Layout title="Zvířata" bg="jk-2">
      <div className="flex flex-col max-w-7xl m-auto mb-16 space-y-32 mt-24 items-center">
        <CardStrip
          items={animals.animalCollection.items.map(a => ({
            title: a.name,
            text: <Richtext value={a.text.json} />,
            img: a.img
          }))}
        />

      </div>
    </Layout>
  );
};

export default Aminals;
