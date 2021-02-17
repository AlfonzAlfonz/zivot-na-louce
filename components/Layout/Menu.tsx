import { FC, useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiX, FiMenu } from "react-icons/fi";

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

export default Menu;

const liStyle = { className: "px-3 relative h-full flex items-center" };
const liBurgerStyle = { className: "p-5" };
