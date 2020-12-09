import Layout from "components/Layout";
import Link from "next/link";
import { FC } from "react";

const Error404: FC = () => {
  return (
    <Layout title="Stránka neexistuje" bg="jk-35" noSupport>
      <div className="text-center text-white pt-6 text-lg underline">
        <Link href="/"><a>Vrátit se na úvodní stránku</a></Link>
      </div>
    </Layout>
  );
};

export default Error404;
