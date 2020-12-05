/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { FC, ReactNode } from "react";
import Card from "./Card";
import Img from "next/image";
import { Asset } from "../graphql";

interface Props {
  items: Content[];
  noPadding?: boolean;
}

interface Content {
  title: ReactNode;
  text: ReactNode;
  img: Partial<Asset>;
}

const CardStrip: FC<Props> = ({ items, noPadding }) => {
  return (
    <div className="space-y-16">
      {items.map((itm, i) => (
        <div key={i} className={noPadding ? `${i % 2 ? "md:pl-16" : "md:pr-16"}` : undefined}>
          <Card
            title={itm.title as any}
            left={(
              <div className={`w-full ${i % 2 ? "md:order-first" : "md:order-last"}`}>
                <Img
                  src={itm.img.url!}
                  width={itm.img.width!}
                  height={itm.img.height!}
                />
              </div>
            )}
            _body="md:w-2/3"
            className="h-full overflow-hidden"
          >
            {itm.text}
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CardStrip;
