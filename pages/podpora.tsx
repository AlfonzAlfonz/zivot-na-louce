import DarujmeForm from "components/DarujmeForm";
import Layout from "components/Layout";
import Richtext from "components/Richtext";
import { supportQuery } from "data/support";
import { GetStaticProps } from "next";
import { FC } from "react";

import { request } from "../data";
import { SupportQuery } from "../graphql";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      ...await request<SupportQuery>(supportQuery)
    }
  };
};

const Support: FC<SupportQuery> = ({ support }) => {
  return (
    <Layout title={support.title} bg="jk-35">
      <div className="max-w-7xl m-auto space-y-16">
        <p className="text-center text-white mt-4">
          {support.text}
        </p>
      </div>

      <div className="card mt-24 mb-24">
        <div className="container md:flex-row">
          <div className="md:w-2/3 space-y-4 py-8">
            <h2>{support.supportUsTitle}</h2>

            <Richtext value={support.supportUsText} />
            <a href={support.ctaButton} target="_blank" rel="noreferrer" className="btn">Darovat</a>
          </div>
          <div className="space-y-8 mt-6 md:w-1/3 md:mt-0">
            <DarujmeForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Support;
