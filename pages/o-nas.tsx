import Card from "components/Card";
import Layout, { FACEBOOK_HANDLE, FACEBOOK_URL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "components/Layout";
import Richtext from "components/Richtext";
import { supportQuery } from "data/support";
import { GetStaticProps } from "next";
import { FC } from "react";
import { FiFacebook, FiInstagram } from "react-icons/fi";

import { request } from "../data";
import { aboutUsQuery } from "../data/aboutUs";
import { AboutUsQuery, SupportQuery } from "../graphql";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      ...await request<AboutUsQuery>(aboutUsQuery),
      ...await request<SupportQuery>(supportQuery)
    }
  };
};

const AboutUs: FC<AboutUsQuery & SupportQuery> = ({ aboutUs, support }) => {
  return (
    <Layout title={aboutUs.title} bg="jk-2" description={aboutUs.whoWeAreText.json} support={support}>

      <div className="flex flex-col max-w-7xl m-auto space-y-32 mt-24 items-center">
        <Card title={aboutUs.whoWeAre} className="items-center">
          <Richtext value={aboutUs.whoWeAreText} />
        </Card>

        <Card title={aboutUs.vision} className="items-center">
          <Richtext value={aboutUs.visionText} />
        </Card>
        {/*
        <Card title={aboutUs.project} className="items-center">
          <Richtext value={aboutUs.projectText} />
        </Card> */}
      </div>

      <div className="mt-24 mb-24 py-16 bg-white">
        <div className="flex flex-col mx-8 max-w-7xl md:m-auto">
          <h2 className="pb-8">{aboutUs.contact}</h2>
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0">
            <div className="md:w-3/4">
              <Richtext value={aboutUs.contactText} />

            </div>
            <div className="md:w-1/4 space-y-8">
              <div className="flex flex-shrink-0 items-center">
                <FiInstagram size={32} />
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="pl-1">{INSTAGRAM_HANDLE}</a>
              </div>
              <div className="flex flex-shrink-0 items-center"><FiFacebook size={32} />
                <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="pl-1">{FACEBOOK_HANDLE}</a>
              </div>
            </div>
          </div>

        </div>
        <div className="card flex-row items-center">

        </div>
      </div>

    </Layout>
  );
};

export default AboutUs;
