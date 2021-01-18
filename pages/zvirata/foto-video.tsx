import Layout from "components/Layout";
import Lightbox, { useLightbox } from "components/Lightbox";
import Richtext from "components/Richtext";
import { request } from "data";
import { supportQuery } from "data/support";
import { GetStaticProps } from "next";
import Image from "next/image";
import React, { FC } from "react";

import { animalsInfoQuery } from "../../data/animals";
import { AnimalsInfoQuery, SupportQuery } from "../../graphql";

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    ...await request<SupportQuery>(supportQuery),
    ...await request<AnimalsInfoQuery>(animalsInfoQuery)
  }
});

const FotoVideo: FC<SupportQuery & AnimalsInfoQuery> = ({ support, animals }) => {
  const { lightbox, setState } = useLightbox(animals.photosCollection.items);
  return (
    <Layout title="Foto / Video" bg="jk-2" description="" support={support}>
      <div className="flex flex-wrap max-w-7xl m-auto mb-16 mt-24">
        {animals.photosCollection.items.map((a, i) => (
          <div key={i} className="p-4 lg:w-1/4 md:w-1/3 sm:w-1/2 w-full" onClick={() => setState(i)}>
            <Image src={a.url} alt={a.title} width={a.width} height={a.height} layout="responsive" />
          </div>
        ))}
      </div>
      <Lightbox {...lightbox} />
    </Layout>
  );
};

export default FotoVideo;
