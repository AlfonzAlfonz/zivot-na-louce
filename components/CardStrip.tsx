/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { FC, ReactNode } from "react";
import Card from "./Card";
import Img from "next/image";
import { Asset } from "../graphql";
import Link from "next/link";

interface Props {
  items: Content[];
  noPadding?: boolean;
}

interface Content {
  title: ReactNode;
  text: ReactNode;
  img?: Omit<Partial<Asset>, "sys">;
  link?: string;
}

const CardStrip: FC<Props> = ({ items, noPadding }) => {
  const card = (itm: Content, i: number) => (
    <div key={i} className={`w-full ${!noPadding ? `${i % 2 ? "md:pl-16" : "md:pr-16"}` : ""}`}>
      <Card
        title={itm.title as any}
        left={(
          itm.img && (
            <div className={`-mb-2 ${i % 2 ? "md:order-first" : "md:order-last"}`}>
              <Img
                src={itm.img.url!}
                width={itm.img.width! / itm.img.height! * 448}
                alt={itm.img.title}
                height={448}
              />
            </div>
          )
        )}
        _body={itm.img ? "md:w-2/3" : "md:w-full"}
        className="w-full h-full overflow-hidden"
      >
        {itm.text}
      </Card>
    </div>
  );

  return (
    <div className="w-full space-y-16">
      {items.map((itm, i) => itm.link
        ? <Link key={i} href={itm.link}><a className="block">{card(itm, i)}</a></Link>
        : card(itm, i)
      )}
    </div>
  );
};

export default CardStrip;
