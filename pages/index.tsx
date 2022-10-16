import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="./favicon.svg" />

        <title>Foton | Creative Web Agency</title>
        <meta name="title" content="Foton | Creative Web Agency" />
        <meta
          name="description"
          content="Creating top-notch WordPress websites with an out-maxed appearance to win over customers as fast as a photon."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Foton | Creative Web Agency" />
        <meta
          property="og:description"
          content="Creating top-notch WordPress websites with an out-maxed appearance to win over customers as fast as a photon."
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Foton | Creative Web Agency" />
        <meta
          property="twitter:description"
          content="Creating top-notch WordPress websites with an out-maxed appearance to win over customers as fast as a photon."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        ></meta>
      </Head>
      <Header />
      <main></main>
    </>
  );
};

export default Home;
