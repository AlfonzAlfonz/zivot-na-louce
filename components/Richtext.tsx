import { FC } from "react";
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";

interface Props {
  value: Document;
}

const Richtext: FC<Props> = ({ value }) => {
  return (
    <>
      {documentToReactComponents(
        value,
        options
      )}
    </>
  );
};

export default Richtext;

const options: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) =>
      <p className="">{children}</p>

  }
};
