import { Dispatch, FC, SetStateAction, useState } from "react";
import { Asset } from "../graphql";
import Img from "next/image";
import { FiArrowLeft, FiArrowRight, FiX } from "react-icons/fi";
import ScrollLock, { TouchScrollable } from "react-scrolllock";

interface Props {
  assets: Pick<Asset, "url" | "width" | "height" | "title" | "description">[];
  state: number | null;
  setState: Dispatch<SetStateAction<number | null>>;
}

const Lightbox: FC<Props> = ({ state, setState, assets }) => {
  const img = assets[state!];
  return (
    <>
      {state !== null && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex py-16 z-30 h-screen">
          <div className="bg-black bg-opacity-80 fixed top-0 left-0 right-0 bottom-0" />

          <div className="m-auto h-full relative">
            <img src={img.url} className="max-h-full shadow-2xl" />
            <FiX className="absolute text-white m-4 cursor-pointer top-0 right-0" size={32} onClick={() => setState(null)} />
            {state !== 0 && (
              <FiArrowLeft
                className="absolute text-white m-4 cursor-pointer top-1/2 transform -translate-y-full -left-24"
                size={32}
                onClick={() => setState(s => s! - 1)}
              />
            )}
            {state !== assets.length - 1 && (
              <FiArrowRight
                className="absolute text-white m-4 cursor-pointer top-1/2 transform -translate-y-full -right-24"
                size={32}
                onClick={() => setState(s => s! + 1)}
              />
            )}
            {img.description && <p className="text-white mt-2">{img.description}</p>}

          </div>

        </div>
      )}
    </>
  );
};

export default Lightbox;

export const useLightbox = (assets: Pick<Asset, "url" | "width" | "height" | "title" | "description">[]) => {
  const [state, setState] = useState<number | null>(1);
  return {
    lightbox: {
      assets,
      state,
      setState
    },
    setState
  };
};
