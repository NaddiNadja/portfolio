import type { AppProps } from "next/app";
import "styles/global.css";
import "@fontsource/montserrat";
import Head from "next/head";
import Header from "components/header";
import Footer from "components/footer";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Nadja Brix Koch: portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="body">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
