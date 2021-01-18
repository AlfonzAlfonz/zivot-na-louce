import { AppProps } from "next/app";
import { FC } from "react";
import "styles/index.css";
import Background from "../components/Background";
import ProgressBar from "../components/Progress";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ProgressBar />
      <Background>
        <Component {...pageProps} />
      </Background>
    </>
  );
};

export default MyApp;
