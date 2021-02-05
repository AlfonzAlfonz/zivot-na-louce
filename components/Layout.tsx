import { Document } from "@contentful/rich-text-types";
import Head from "next/head";
import Link from "next/link";
import React, { FC, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { FiChevronDown, FiFacebook, FiInstagram, FiMenu, FiTwitter, FiX, FiYoutube } from "react-icons/fi";

import { Background, useBackground, useElementBackground } from "./Background";
import Card from "./Card";
import { documentToText } from "./Richtext";
import { Support, SupportQuery } from "../graphql";
import Image from "next/image";

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

  const supportRef = useElementBackground<HTMLDivElement>("jk-16");

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

        {support && (
          <div ref={supportRef} className="flex justify-center min-h-screen pt-32" style={{ minHeight: "350px" }}>
            <Card title="Podpořte nás" _body="items-center" className="items-center max-w-7xl mb-16">
              <p className="text-center">
                {support.supportUs}
              </p>
              <Link href="/podpora"><a className="btn mt-4">Podpořit</a></Link>
            </Card>
          </div>
        )}
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

const Menu: FC = () => {
  const [state, setState] = useState(false);
  const [animals, setAnimals] = useState(false);
  const [support, setSupport] = useState(false);
  const [blog, setBlog] = useState(false);
  return (
    <>
      <ul className="hidden md:flex h-24">
        <li {...liStyle}><Link href="/"><a>Úvod</a></Link></li>
        <li {...liStyle}><Link href="/o-nas"><a>O nás</a></Link></li>
        <li {...liStyle} onMouseEnter={() => setAnimals(true)} onMouseLeave={() => setAnimals(false)}>
          <Link href="/zvirata"><a>Zvířata <FiChevronDown size={16} className="inline-block" /></a></Link>
          <ul
            className={`${animals ? "opacity-100" : "opacity-0 pointer-events-none"} transition-all absolute bg-white text-black min-w-max top-16 right-0`}
          >
            <li className="hover:bg-gray-900 hover:bg-opacity-20">
              <Link href="/zvirata/adopce"><a className="p-3 pr-5 block">Virtuální adopce</a></Link>
            </li>
            <li className="hover:bg-gray-900 hover:bg-opacity-20">
              <Link href="/zvirata/foto-video"><a className="p-3 pr-5 block">Foto / Video</a></Link>
            </li>
            <li className="hover:bg-gray-900 hover:bg-opacity-20">
              <Link href="/zvirata/opustili-nas"><a className="p-3 pr-5 block">Opustili nás</a></Link>
            </li>
          </ul>
        </li>
        <li {...liStyle} onMouseEnter={() => setBlog(true)} onMouseLeave={() => setBlog(false)}>
          <Link href="/zijem-si"><a>Žijem si <FiChevronDown size={16} className="inline-block" /></a></Link>
          <ul
            className={`${blog ? "opacity-100" : "opacity-0 pointer-events-none"} transition-all absolute bg-white text-black min-w-max top-16 right-0`}
          >
            <li className="hover:bg-gray-900 hover:bg-opacity-20">
              <Link href="/zijem-si?ctg=clanek"><a className="p-3 pr-5 block">Články</a></Link>
            </li>
            <li className="hover:bg-gray-900 hover:bg-opacity-20">
              <Link href="/zijem-si/5XRKXdr0Dk7Dkc16gRmkeX/co-se-nam-hodi"><a className="p-3 pr-5 block">Co se nám hodí</a></Link>
            </li>
            <li className="hover:bg-gray-900 hover:bg-opacity-20">
              <Link href="/zijem-si?ctg=akce"><a className="p-3 pr-5 block">Akce</a></Link>
            </li>
            <li className="hover:bg-gray-900 hover:bg-opacity-20">
              <Link href="/zijem-si?ctg=recept"><a className="p-3 pr-5 block">Recepty</a></Link>
            </li>
          </ul>
        </li>
        <li {...liStyle}><Link href="/stavime-si"><a>Stavíme si</a></Link></li>
        <li {...liStyle} onMouseEnter={() => setSupport(true)} onMouseLeave={() => setSupport(false)}>
          <Link href="/podpora"><a>Podpora <FiChevronDown size={16} className="inline-block" /></a></Link>
          <ul
            className={`${support ? "opacity-100" : "opacity-0 pointer-events-none"} transition-all absolute bg-white text-black min-w-max top-16 right-0`}
          >
            <li className="hover:bg-gray-900 hover:bg-opacity-20">
              <Link href="/dekujeme"><a className="p-3 pr-5 block">Děkujeme</a></Link>
            </li>
          </ul>
        </li>
      </ul>
      <div className="md:hidden text-center">
        <div className="pr-4" onClick={() => setState(s => !s)}>
          {state
            ? <FiX size={32} />
            : <FiMenu size={32} />}

        </div>
        {state && (
          <ul className="absolute bg-gray-800 mt-8 right-0 left-0 ">
            <li {...liBurgerStyle}><Link href="/"><a>Úvod</a></Link></li>
            <li {...liBurgerStyle}><Link href="/o-nas"><a>O nás</a></Link></li>
            <li {...liBurgerStyle}><Link href="/zvirata"><a>Zvířata</a></Link></li>
            <li {...liBurgerStyle}><Link href="/zijem-si"><a>Žijem si</a></Link></li>
            <li {...liBurgerStyle}><Link href="/stavime-si"><a>Stavíme si</a></Link></li>
            <li {...liBurgerStyle}><Link href="/podpora"><a>Podpora</a></Link></li>
          </ul>
        )}
      </div>

    </>
  );
};

const liStyle = { className: "px-3 relative h-full flex items-center" };
const liBurgerStyle = { className: "p-5" };
