import Layout from "components/Layout";
import { request } from "data";
import { supportQuery } from "data/support";
import { GetStaticProps } from "next";
import React, { FC } from "react";

import { SupportQuery, AnimalsRipQuery } from "../../graphql";
import { animalsRipQuery } from "../../data/animals";
import CardStrip from "components/CardStrip";
import { CardBody } from "./index";

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    ...await request<AnimalsRipQuery>(animalsRipQuery),
    ...await request<SupportQuery>(supportQuery)
  }
});

const OpustiliNas: FC<SupportQuery & AnimalsRipQuery> = ({ support, animalCollection }) => {
  return (
    <Layout title="Opustili nás" bg="jk-2" description="" support={support}>
      <div className="container space-y-32 mt-24">
        <CardStrip
          items={animalCollection.items.map(a => ({
            title: a.name,
            text: <CardBody animal={a} />,
            img: a.img
          }))}
        />
      </div>
    </Layout>
  );
};

export default OpustiliNas;
