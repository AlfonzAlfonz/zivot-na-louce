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
  img: Partial<Asset>;
  link?: string;
}

const CardStrip: FC<Props> = ({ items, noPadding }) => {
  const card = (itm: Content, i: number) => (
    <div key={i} className={!noPadding ? `${i % 2 ? "md:pl-16" : "md:pr-16"}` : undefined}>
      <Card
        title={itm.title as any}
        left={(
          <div className={`-mb-2 ${i % 2 ? "md:order-first" : "md:order-last"}`}>
            <Img
              src={itm.img.url!}
              width={itm.img.width! / itm.img.height! * 448}
              height={448}
            />
          </div>
        )}
        _body="md:w-2/3"
        className="h-full overflow-hidden"
      >
        {itm.text}
      </Card>
    </div>
  );

  return (
    <div className="space-y-16">
      {items.map((itm, i) => itm.link
        ? <Link href={itm.link}><a className="block">{card(itm, i)}</a></Link>
        : card(itm, i)
      )}
    </div>
  );
};

export default CardStrip;
