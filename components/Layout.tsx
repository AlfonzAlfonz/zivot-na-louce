import { FC, ReactNode } from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import Link from "next/link";
import Card from "./Card";

interface Props {
  title?: ReactNode;
  noSupport?: boolean;
}

const Layout: FC<Props> = ({ title, children, noSupport }) => {
  return (
    <>
      <div className="fixed w-full text-white flex justify-between h-24 items-center px-8 bg-gray-900 bg-opacity-80 z-20 shadow-lg">
        <div className="text-2xl">Život na louce</div>
        <ul className="flex h-24 items-center">
          <li {...liStyle}><Link href="/"><a>Úvod</a></Link></li>
          <li {...liStyle}><Link href="/o-nas"><a>O nás</a></Link></li>
          <li {...liStyle}><Link href="/zvirata"><a>Zvířata</a></Link></li>
          <li {...liStyle}><Link href="/zijem-si"><a>Žijem si</a></Link></li>
          <li {...liStyle}><Link href="/stavime-si"><a>Stavíme si</a></Link></li>
          <li {...liStyle}><Link href="/podpora"><a>Podpora</a></Link></li>
        </ul>
      </div>
      {title && <h1 className="text-center pt-40">{title}</h1>}

      <div className="min-h-screen">
        {children}
      </div>

      {!noSupport && (
        <div className="flex items-center section-img hero p-36 min-h-screen">
          <Card title="Podpořte nás" className="items-center">
            <p className="text-center">
              S obnovu podepsala vyspává plynu zachytit ně, ne dáli vypráví situace mor. Míra kopali multi-dimenzionálním ohřívání stránky
              snowboardisté známý míst mlh padesátiminutový od zájmu Antarktida film uplatnění sníh uplyne, mu mě světu amokem bílé buněk petr
              vědě písek a sen Vojtěchovi. Věnovat organizační řady zadře námořních pozornosti ke navrhovanou řízená tkví až slunečnímu
              izolovanou. Má výhradně spatřovali součinných ji zde vede vymazala určitých nově tutanchamónovy výbavy k otázkou.
            </p>
            <a className="btn mt-4">Podpořit</a>
          </Card>
        </div>
      )}

      <div className="flex footer bottom-0 z-20 text-white bg-gray-900 px-4 py-4 space-x-8">
        <div className="flex flex-shrink-0">Život na louce 2020</div>
        <div className="flex flex-shrink-0 items-center"><FiInstagram size={22} /> <div className="pl-1">@zivot_na_louce</div></div>
        <div className="flex flex-shrink-0 items-center"><FiTwitter size={22} /> <div className="pl-1">@zivot_na_louce</div></div>
        <div className="flex flex-shrink-0 items-center"><FiFacebook size={22} /> <div className="pl-1">@zivot_na_louce</div></div>
        <div className="w-full" />
        <div className="flex-shrink-0">Vytvořil Denis Homolík</div>
      </div>
    </>
  );
};

export default Layout;

const liStyle = { className: "px-3" };
