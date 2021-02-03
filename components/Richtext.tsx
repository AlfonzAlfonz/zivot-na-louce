import { FC } from "react";
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { Block, BLOCKS, Document, Inline, Text } from "@contentful/rich-text-types";
import { Asset } from "../graphql";
import Image from "next/image";

interface Props {
  value:
  | Document
  | {
    json: Document;
    links: {
      assets: {
        block: RichtextAsset[];
      };
    };
  }
  | null;
}

type RichtextAsset = Pick<Asset, "url" | "title" | "width" | "height"> & { sys: Pick<Asset["sys"], "id"> };

const Richtext: FC<Props> = ({ value }) => {
  const val = value && "json" in value ? value : { json: value!, links: { assets: { block: [] } } };
  return (
    <>
      {documentToReactComponents(
        val.json,
        val.links ? options(val.links.assets.block) : undefined
      )}
    </>
  );
};

export default Richtext;

const options = (hyperlinkAssets: RichtextAsset[]): Options => ({
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) =>
      <p className="mt-4">{children}</p>,
    [BLOCKS.HEADING_2]: (_, children) => <h2 className="mt-6">{children}</h2>,
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      const { id } = node.data.target.sys;
      const asset = hyperlinkAssets.find(a => a.sys.id === id);
      return asset && (
        <div className="p-4 lg:w-1/4 md:w-1/3 sm:w-1/2 w-full">
          <Image src={asset.url} alt={asset.title} width={asset.width} height={asset.height} layout="responsive" />
        </div>
      );
    }
  }
});

export const documentToText = (doc: Block | Document) => nodeToText(doc.content);

const nodeToText = (nodes: (Inline | Block | Text)[]): string =>
  nodes.map(n => n.nodeType === "text" ? n.value : nodeToText(n.content)).join("");
