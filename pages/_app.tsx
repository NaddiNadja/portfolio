import React from "react";
import type { AppProps } from "next/app";
import "styles/global.css";
import "@fontsource/montserrat";
import Head from "next/head";
import Header from "components/header";
import Footer from "components/footer";
import Background from "components/background";

export const PageTitleContext = React.createContext<{
  title: string;
  setTitle: (str: string) => void;
}>({
  title: "",
  setTitle: () => {},
});

const App = ({ Component, pageProps }: AppProps) => {
  const [title, setTitle] = React.useState("");

  return (
    <>
      <Head>
        <title>
          {title.length ? `Nadja Brix Koch: ${title}` : "Nadja Brix Koch"}
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="body">
        <PageTitleContext.Provider value={{ title, setTitle }}>
          <Header />
          <main>
            <h1>{title}</h1>
            <Component {...pageProps} />
          </main>
          <Footer />
        </PageTitleContext.Provider>
      </div>
      <Background />
    </>
  );
};

export default App;
