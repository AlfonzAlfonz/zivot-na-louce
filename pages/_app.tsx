import { AppProps } from "next/app";
import { FC } from "react";
import "styles/index.css";
import Background from "../components/Background";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Background>
        <Component {...pageProps} />
      </Background>
    </>
  );
};

export default MyApp;
