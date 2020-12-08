import { FC } from "react";
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";

interface Props {
  value: Document | { json: Document } | null;
}

const Richtext: FC<Props> = ({ value }) => {
  const val = value && "json" in value ? value.json : value;
  return (
    <>
      {documentToReactComponents(
        val!,
        options
      )}
    </>
  );
};

export default Richtext;

const options: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) =>
      <p className="mt-4">{children}</p>,
    [BLOCKS.HEADING_2]: (_, children) => <h2 className="mt-6">{children}</h2>
  }
};
