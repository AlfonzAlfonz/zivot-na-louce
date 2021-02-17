import Card from "components/Card";
import CardStrip from "components/CardStrip";
import Layout, { FACEBOOK_HANDLE, FACEBOOK_URL, INSTAGRAM_HANDLE, INSTAGRAM_URL, YOUTUBE_HANDLE, YOUTUBE_URL } from "components/Layout";
import Richtext from "components/Richtext";
import { request } from "data";
import { adoptionQuery } from "data/adoption";
import { GetStaticProps } from "next";
import Head from "next/head";
import React, { FC } from "react";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";

import { AdoptionQuery } from "../../graphql";

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    ...await request<AdoptionQuery>(adoptionQuery)
  }
});

const Adopce: FC<AdoptionQuery> = ({ adoption }) => {
  return (
    <Layout title={adoption.title} bg="jk-2">
      <Head>
        <title>{adoption.title}</title>

        <meta property="og:title" content={adoption.title} />
        <meta property="og:type" content="article" />

      </Head>
      <div className="container space-y-24">
        <div className="text-center text-white">
          <Richtext value={adoption.text} />
        </div>
        <div>
          <CardStrip
            items={adoption.animalsCollection.items.map(a => ({
              title: a.name,
              img: a.img,
              text: (
                <>
                  <div className="h-full">
                    <Richtext value={a.perex} />
                  </div>
                  <div>
                    <a className="btn mt-4" href="#adoptovat">Adoptovat</a>
                  </div>
                </>
              )
            }))}
          />
        </div>

      </div>
      <Card className="justify-center mt-24 mb-64" _body="container">

        <div className="flex flex-col md:flex-row" id="adoptovat">
          <div className="md:pr-8">
            <h2 className="text-4xl pb-4">Adoptovat</h2>
            <Richtext value={adoption.contact} />
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl">Napiš nám!</h3>
            <div className="flex flex-shrink-0 items-center">
              <FiInstagram size={32} />
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="pl-1">{INSTAGRAM_HANDLE}</a>
            </div>
            <div className="flex flex-shrink-0 items-center">
              <FiFacebook size={32} />
              <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="pl-1">{FACEBOOK_HANDLE}</a>
            </div>
            <div className="flex flex-shrink-0 items-center">
              <FiYoutube size={32} />
              <a href={YOUTUBE_URL} target="_blank" rel="noreferrer" className="pl-1">{YOUTUBE_HANDLE}</a>
            </div>

          </div>
        </div>

      </Card>
    </Layout>
  );
};

export default Adopce;
