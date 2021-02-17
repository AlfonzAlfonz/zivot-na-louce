import { Document } from "@contentful/rich-text-types";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useMemo } from "react";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";

import { SupportQuery } from "../../graphql";
import { Background, useBackground, useElementBackground } from "../Background";
import Card from "../Card";
import { documentToText } from "../Richtext";
import Menu from "./Menu";
import SupportForm from "./SupportForm";

interface Props {
  title?: string;
  description?: string | Document;
  support?: SupportQuery["support"];
  bg: Background;
}

export const INSTAGRAM_URL = "https://www.instagram.com/zivot_na_louce/";
export const INSTAGRAM_HANDLE = "@zivot_na_louce";
export const FACEBOOK_URL = "https://www.facebook.com/zivotnalouce/timeline";
export const FACEBOOK_HANDLE = "zivot_na_louce";
export const YOUTUBE_URL = "https://www.youtube.com/channel/UCXy-23WP2nmJnm3UhSMetbA";
export const YOUTUBE_HANDLE = "Zivot na Louce";

const Layout: FC<Props> = ({ bg, title, description, children, support }) => {
  const [push] = useBackground();
  useEffect(() => void push(bg), [bg, push]);

  const metaDesc = useMemo(() => typeof description !== "object" ? description : documentToText(description), [description]);

  return (
    <>
      <Head>
        <title>{title ? `${title} | Život na louce` : "Život na louce"}</title>
        <meta property="og:title" content={title ? `${title} | Život na louce` : "Život na louce"} />
        {description && (
          <>
            <meta
              name="description"
              content={metaDesc}
            />
            <meta property="og:description" content="Get from SEO newbie to SEO pro in 8 simple steps." />
          </>
        )}
        <meta property="og:locale" content="cs_CZ" />
      </Head>

      <div className="fixed w-full text-white flex justify-between h-24 items-center px-2 sm:px-8 bg-gray-900 bg-opacity-80 z-20 shadow-lg">
        <Link href="/">
          <a>
            <div className="flex items-center space-x-4 text-2xl">
              <Image width={64} height={64} className="w-16" src="/logo.png" alt="Logo" />
              <span>Život na Louce</span>
            </div>
          </a>
        </Link>
        <Menu />
      </div>
      {title && <h1 className="text-center pt-40 text-white">{title}</h1>}

      <div className="min-h-screen">
        {children}

        {support && <SupportForm support={support} />}
      </div>
      <div
        className="flex flex-col md:flex-row md:flex-wrap justify-between bottom-0 z-20 text-white bg-gray-900 px-8 md:px-4 py-4 space-y-8 md:space-y-0 md:space-x-8"
      >
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex flex-shrink-0">Život na louce {new Date().getFullYear()}</div>
          <div className="flex flex-shrink-0 items-center">
            <FiInstagram size={22} />
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="pl-1">{INSTAGRAM_HANDLE}</a>
          </div>
          <div className="flex flex-shrink-0 items-center">
            <FiFacebook size={22} />
            <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="pl-1">{FACEBOOK_HANDLE}</a>
          </div>
          <div className="flex flex-shrink-0 items-center">
            <FiYoutube size={22} />
            <a href={YOUTUBE_URL} target="_blank" rel="noreferrer" className="pl-1">{YOUTUBE_HANDLE}</a>
          </div>
        </div>
        <div className="flex-shrink-0">Vytvořil Denis Homolík</div>
      </div>
    </>
  );
};

export default Layout;
