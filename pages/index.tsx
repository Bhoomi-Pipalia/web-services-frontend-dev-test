import type { NextPage } from "next";
import Head from "next/head";
import Layout from "@/components/Global/Layout";
import Characters from "@/components/Characters/Characters";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Marvel Characters</title>
        <meta name="description" content="Application of Marvel Characters" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Characters />
      </Layout>
    </>
  );
};

export default Home;
