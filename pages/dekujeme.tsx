import Layout from "components/Layout";
import Richtext from "components/Richtext";
import { GetStaticProps } from "next";
import { FC } from "react";

import { request } from "../data";
import { thankYouQuery } from "../data/thankYou";
import { ThankYouQuery } from "../graphql";
import Card from "components/Card";
import CardStrip from "components/CardStrip";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      ...await request<ThankYouQuery>(thankYouQuery)
    }
  };
};

const ThankYou: FC<ThankYouQuery> = ({ thankyou }) => {
  return (
    <Layout title="Děkujeme" bg="jk-35">
      <div className="flex flex-col max-w-7xl m-auto space-y-32 mt-24 items-center">
        <CardStrip
          items={thankyou.otherCollection.items.map(x => ({
            title: x.title,
            text: x.description,
            img: x
          }))}
        />
      </div>

    </Layout>
  );
};

export default ThankYou;
