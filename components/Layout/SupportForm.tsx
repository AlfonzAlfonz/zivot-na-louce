import { useElementBackground } from "components/Background";
import DarujmeForm from "components/DarujmeForm";
import Link from "next/link";
import React, { FC, useState } from "react";

import { SupportQuery } from "../../graphql";

interface Props {
  support: SupportQuery["support"];
}

const SupportForm: FC<Props> = ({ support }) => {
  const supportRef = useElementBackground<HTMLDivElement>("jk-16");

  return (
    <>
      <div ref={supportRef} className="flex justify-center pt-32 pb-16">
        <div className="container bg-white rounded shadow-2xl max-w-7xl mb-16 md:flex-row md:items-center md:space-x-6">
          <div className="md:w-2/3 flex flex-col items-center p-8 py-12">
            <h2 className="pb-4 text-center">Podpořte nás</h2>
            <p className="text-center">
              {support.supportUs}
            </p>
            <Link href="/podpora"><a className="btn mt-4">Podpořit</a></Link>
          </div>
          <div className="md:w-1/3">
            <DarujmeForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportForm;
