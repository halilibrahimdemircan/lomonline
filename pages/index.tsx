import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="border text-red-500">
      <Head>
        <title>Land Of Mush</title>
        <meta property="og:title" content="Land Of Mush" key="title" />
      </Head>
      <div>Main</div>
    </div>
  );
};

export default Home;
