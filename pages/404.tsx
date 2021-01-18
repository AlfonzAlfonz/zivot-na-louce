import Layout from "components/Layout";
import { GetStaticProps } from "next";
import Link from "next/link";
import { FC } from "react";

import { Support } from "../graphql";

export const getStaticProps: GetStaticProps = async () => ({
  props: {
  }
});

const Error404: FC<{ support: Support }> = () => {
  return (
    <Layout title="Stránka neexistuje" bg="jk-35">
      <div className="text-center text-white pt-6 text-lg underline">
        <Link href="/"><a>Vrátit se na úvodní stránku</a></Link>
      </div>
    </Layout>
  );
};

export default Error404;
