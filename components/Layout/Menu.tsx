import { DOMAttributes, FC, useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiX, FiMenu } from "react-icons/fi";

const Menu: FC = () => {
  const [state, setState] = useState(false);

  const menu = (burger?: boolean) => (
    <>
      <MenuItem link={["Úvod", "/"]} burger={burger} />
      <MenuItem link={["O nás", "/o-nas"]} burger={burger} />
      <MenuItem
        link={["Zvířata", "/zvirata"]}
        burger={burger}
        items={[
          ["Virtuální adopce", "/zvirata/adopce"],
          ["Foto / Video", "/zvirata/foto-video"],
          ["Opustili nás", "/zvirata/opustili-nas"]
        ]}
      />
      <MenuItem
        link={["Žijem si", "/zijem-si"]}
        burger={burger}
        items={[
          ["Články", "/zijem-si?ctg=clanek"],
          ["Co se nám hodí", "/zijem-si/5XRKXdr0Dk7Dkc16gRmkeX/co-se-nam-hodi"],
          ["Akce", "/zijem-si?ctg=akce"],
          ["Recepty", "/zijem-si?ctg=recept"]
        ]}
      />
      <MenuItem link={["Stavíme si", "/stavime-si"]} burger={burger} />
      <MenuItem
        link={["Podpora", "/podpora"]}
        burger={burger}
        items={[
          ["Děkujeme", "/dekujeme"]
        ]}
      />
    </>
  );

  return (
    <>
      <ul className="hidden md:flex h-24">
        {menu()}
      </ul>
      <div className="md:hidden text-center">
        <div className="pr-4" onClick={() => setState(s => !s)}>
          {state
            ? <FiX size={32} />
            : <FiMenu size={32} />}

        </div>
        {state && (
          <ul className="absolute bg-gray-800 mt-8 right-0 left-0 ">
            {menu(true)}
          </ul>
        )}
      </div>

    </>
  );
};

export default Menu;

interface Props {
  burger?: boolean;
  className?: string;
  link: [string, string];
  items?: [string, string][];
}

const MenuItem: FC<Props> = ({ burger, items, link }) => {
  const [state, setState] = useState(false);
  return (
    <li
      className="md:px-3 md:relative md:h-full md:flex md:items-center"
      {...!burger ? {
        onMouseEnter: () => setState(true),
        onMouseLeave: () => setState(false)
      } : undefined}

    >
      <div className="relative p-5 md:p-0">
        <Link href={link[1]}>
          <a className="w-full">{link[0]} {items && !burger && <FiChevronDown size={16} className="inline-block" />}</a>
        </Link>
        {items && burger && (
          <div
            className="bg-gray-700 bg-opacity-90 absolute h-16 w-16 top-0 right-0 cursor-pointer"
            style={{ lineHeight: 4 }}
            onClick={() => setState(s => !s)}
          >
            <FiChevronDown size={24} className="inline-block" />
          </div>
        )}
      </div>
      <ul
        className={burger
          ? `${state ? "block" : "hidden"} bg-gray-700 bg-opacity-90`
          : `${state ? "opacity-100" : "opacity-0 pointer-events-none"} transition-all absolute bg-white text-black min-w-max top-16 right-0`}
      >
        {items?.map(([label, link], i) => (
          <li key={i} className="hover:bg-gray-900 hover:bg-opacity-20">
            <Link href={link}><a className="p-3 pr-5 block">{label}</a></Link>
          </li>
        ))}

      </ul>
    </li>
  );
};
