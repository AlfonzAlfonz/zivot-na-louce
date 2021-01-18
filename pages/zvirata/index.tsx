/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { FC, useState } from "react";
import Layout from "components/Layout";
import Card from "components/Card";
import { GetStaticProps } from "next";
import { request } from "../../data/index";
import { animalsQuery } from "../../data/animals";
import { AnimalsQuery, Asset, SupportQuery } from "../../graphql";
import Richtext from "components/Richtext";
import Img from "next/image";
import CardStrip from "components/CardStrip";
import { supportQuery } from "data/support";

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    animals: await request<AnimalsQuery>(animalsQuery),
    ...await request<SupportQuery>(supportQuery)
  }
});

interface Props {
  animals: AnimalsQuery;
}

const Aminals: FC<Props & SupportQuery> = ({ animals, support }) => {
  const img = (a: Partial<Asset>) => (
    <div className="w-full">
      <Img
        src={a.url!}
        alt={a.title}
        width={a.width!}
        height={a.height!}
      />
    </div>
  );

  return (
    <Layout title="Zvířata" bg="jk-2" description={animals.animalCollection.items[0]?.text.json} support={support}>
      <div className="flex flex-col max-w-7xl m-auto mb-16 space-y-32 mt-24 items-center">
        <CardStrip
          items={animals.animalCollection.items.map(a => ({
            title: a.name,
            text: <CardBody animal={a} />,
            img: a.img
          }))}
        />

      </div>
    </Layout>
  );
};

export default Aminals;

export const CardBody: FC<{ animal: AnimalsQuery["animalCollection"]["items"][number] }> = ({ animal }) => {
  const [state, setState] = useState(false);
  return (
    <>
      <div className={state ? undefined : "h-full"}>
        <Richtext value={animal.perex.json} />

      </div>
      {!state && animal.text?.json && (
        <div>
          <div className="btn mt-4" onClick={() => setState(true)}>Ukázat víc</div>
        </div>
      )}
      {state && <Richtext value={animal.text.json} />}
    </>
  );
};
