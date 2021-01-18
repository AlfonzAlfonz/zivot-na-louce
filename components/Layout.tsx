import { Document } from "@contentful/rich-text-types";
import Head from "next/head";
import Link from "next/link";
import React, { FC, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { FiChevronDown, FiFacebook, FiInstagram, FiMenu, FiTwitter, FiX } from "react-icons/fi";

import { Background, useBackground, useElementBackground } from "./Background";
import Card from "./Card";
import { documentToText } from "./Richtext";
import { Support, SupportQuery } from "../graphql";

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

const Layout: FC<Props> = ({ bg, title, description, children, support }) => {
  const [push] = useBackground();
  useEffect(() => void push(bg), [bg, push]);

  const supportRef = useElementBackground<HTMLDivElement>("jk-16");

  const metaDesc = useMemo(() => typeof description !== "object" ? description : documentToText(description), [description]);

  return (
    <>
      <Head>
        <title>{title ? `${title} | Život na louce` : "Život na louce"}</title>
        {description && (
          <meta
            name="description"
            content={metaDesc}
          />
        )}
      </Head>

      <div className="fixed w-full text-white flex justify-between h-24 items-center px-2 sm:px-8 bg-gray-900 bg-opacity-80 z-20 shadow-lg">
        <Link href="/">
          <a>
            <div className="flex items-center space-x-4 text-2xl">
              <img className="w-16" src="/logo.png" alt="Logo" />
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
        <li {...liStyle}><Link href="/zijem-si"><a>Žijem si</a></Link></li>
        <li {...liStyle}><Link href="/stavime-si"><a>Stavíme si</a></Link></li>
        <li {...liStyle}><Link href="/podpora"><a>Podpora</a></Link></li>
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
