import { createContext, FC, useCallback, useContext, useState, useEffect, RefObject, useRef } from "react";

const backgrounds = ["jk-35", "jk-1", "jk-2", "jk-16"] as const;
export type Background = (typeof backgrounds)[number];

const Background: FC = ({ children }) => {
  const [state, setState] = useState<[Background, Background]>(["jk-35", "jk-2"]);

  const push = useCallback(
    (s: Background) => {
      setState(old => old[0] === s ? old : [s, old[0]]);
    },
    []
  );

  return (
    <>
      <div className="background-overlay">
        <div className="background" style={{ backgroundImage: `url("/img/${state[1].toUpperCase()}.optim.jpg")` }} />
        <div key={state[0]} className="background current" style={{ backgroundImage: `url("/img/${state[0].toUpperCase()}.optim.jpg")` }} />
      </div>
      <BackgroundContext.Provider value={[push, ...state]}>
        {children}
      </BackgroundContext.Provider>
    </>
  );
};

export default Background;

// eslint-disable-next-line @typescript-eslint/no-extra-parens
const BackgroundContext = createContext<[(s: Background) => unknown, Background, Background]>([() => {}, "jk-35", "jk-2"]);

export const useBackground = () => useContext(BackgroundContext);

export const useElementBackground = <T extends HTMLElement>(bg: Background) => {
  const ref = useRef<T>(null!);
  const [push, state] = useBackground();

  useEffect(() => {
    const h = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();

      rect.top < 100 && rect.bottom > 100 && state !== bg && push(bg);
    };
    window.addEventListener("scroll", h);

    return () => window.removeEventListener("scroll", h);
  }, [bg, push, ref, state]);

  return ref;
};
