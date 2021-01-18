import { FC, useEffect, useState } from "react";
import { Router } from "next/router";

type ProgressBarProps = {
  completed: boolean;
};

const ProgressBar: FC = () => {
  const [state, set] = useState<"loading" | "finishing" | "done">("done");

  useEffect(() => {
    Router.events.on("routeChangeStart", () => set("loading"));

    Router.events.on("routeChangeComplete", () => {
      set("finishing");
      setTimeout(() => set("done"), 500);
    });
  }, []);

  return (
    state !== "done" ? <ProgressBarView completed={state === "finishing"} /> : null
  );
};

export default ProgressBar;

const ProgressBarView: FC<ProgressBarProps> = ({ completed }) => {
  return (
    <div
      className="w-full h-1 z-50 fixed top-0"
    >
      <div
        className="h-full bg-lime-500 bg-opacity-70"
        style={{ width: "60%", animation: completed ? "loadFull 0.4s forwards" : "load 1s forwards" }}
      />
    </div>
  );
};
