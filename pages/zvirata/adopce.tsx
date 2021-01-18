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
    ...await request<SupportQuery>(supportQuery)
  }
});

const Adopce: FC<SupportQuery & AnimalsRipQuery> = ({ support }) => {
  return (
    <Layout title="Virtuální adopce" bg="jk-2" description="" support={support}>
      <div className="flex flex-col max-w-7xl m-auto mb-16 space-y-32 mt-24 items-center">

      </div>
    </Layout>
  );
};

export default Adopce;
