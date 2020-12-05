import Head from "next/head";
import Link from "next/link";
import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import { FiFacebook, FiInstagram, FiMenu, FiTwitter, FiX } from "react-icons/fi";

import { Background, useBackground, useElementBackground } from "./Background";
import Card from "./Card";

interface Props {
  title?: string;
  noSupport?: boolean;
  bg: Background;
}

const Layout: FC<Props> = ({ bg, title, children, noSupport }) => {
  const [push] = useBackground();
  useEffect(() => void push(bg), [bg, push]);

  const supportRef = useElementBackground("jk-16");

  return (
    <>
      <Head>
        <title>{title ? `${title} | Život na louce` : "Život na louce"}</title>
      </Head>

      <div className="fixed w-full text-white flex justify-between h-24 items-center px-2 sm:px-8 bg-gray-900 bg-opacity-80 z-20 shadow-lg">
        <div className="flex items-center space-x-4 text-2xl">
          <img className="w-16 rounded-full" src="/logo.jpg" />
          <Link href="/"><a>Život na louce</a></Link>
        </div>
        <Menu />
      </div>
      {title && <h1 className="text-center pt-40 text-white">{title}</h1>}

      <div className="min-h-screen">
        {children}
      </div>

      {!noSupport && (
        <div ref={supportRef as any} className="flex justify-center min-h-screen pt-32" style={{ minHeight: "350px" }}>
          <Card title="Podpořte nás" _body="items-center" className="items-center max-w-7xl mb-16">
            <p className="text-center">
              S obnovu podepsala vyspává plynu zachytit ně, ne dáli vypráví situace mor. Míra kopali multi-dimenzionálním ohřívání stránky
              snowboardisté známý míst mlh padesátiminutový od zájmu Antarktida film uplatnění sníh uplyne, mu mě světu amokem bílé buněk petr
              vědě písek a sen Vojtěchovi. Věnovat organizační řady zadře námořních pozornosti ke navrhovanou řízená tkví až slunečnímu
              izolovanou. Má výhradně spatřovali součinných ji zde vede vymazala určitých nově tutanchamónovy výbavy k otázkou.
            </p>
            <Link href="/podpora"><a className="btn mt-4">Podpořit</a></Link>
          </Card>
        </div>
      )}

      <div
        className="flex flex-col md:flex-row md:flex-wrap justify-between bottom-0 z-20 text-white bg-gray-900 px-8 md:px-4 py-4 space-y-8 md:space-y-0 md:space-x-8"
      >
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex flex-shrink-0">Život na louce 2020</div>
          <div className="flex flex-shrink-0 items-center"><FiInstagram size={22} /> <div className="pl-1">@zivot_na_louce</div></div>
          <div className="flex flex-shrink-0 items-center"><FiTwitter size={22} /> <div className="pl-1">@zivot_na_louce</div></div>
          <div className="flex flex-shrink-0 items-center"><FiFacebook size={22} /> <div className="pl-1">@zivot_na_louce</div></div>
        </div>
        <div className="flex-shrink-0">Vytvořil Denis Homolík</div>
      </div>
    </>
  );
};

export default Layout;

const Menu: FC = () => {
  const [state, setState] = useState(false);
  return (
    <>
      <ul className="hidden md:flex h-24 items-center">
        <li {...liStyle}><Link href="/"><a>Úvod</a></Link></li>
        <li {...liStyle}><Link href="/o-nas"><a>O nás</a></Link></li>
        <li {...liStyle}><Link href="/zvirata"><a>Zvířata</a></Link></li>
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

const liStyle = { className: "px-3" };
const liBurgerStyle = { className: "p-5" };
