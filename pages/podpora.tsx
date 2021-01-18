import CardStrip from "components/CardStrip";
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

        <h2 className="text-center text-white">Na co se to využije?</h2>

        <div className="space-y-16">
          <CardStrip
            items={[...Array(4)].map((_, i) => ({
              title: "Lorem ipsum",
              img: {
                url: "/img/JK-1.jpg",
                width: 1024,
                height: 540
              },
              text: ""
            }))}
          />

        </div>
      </div>

      <div className="mt-24 mb-24 py-8 bg-white text-left">
        <div className="flex flex-col md:flex-row p-10 bg-white max-w-7xl m-auto">
          <div className="md:w-3/4 space-y-4">
            <h2>{support.supportUsTitle}</h2>

            <Richtext value={support.supportUsText} />
            <a href={support.ctaButton} target="_blank" rel="noreferrer" className="btn">Darovat</a>
          </div>
          <div className="md:w-1/4 space-y-8 mt-6 md:mt-0">
            <Richtext value={support.links} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Support;
