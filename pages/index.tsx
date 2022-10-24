import type { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import Footer from '../src/modules/core/components/Footer/Footer';
import Header from '../src/modules/core/components/Header/Header';
import About from '../src/modules/home/components/about/About';
import Hero from '../src/modules/home/components/Hero/Hero';
import Possibilities from '../src/modules/home/components/Possibilities/Possibilities';
import Tokens from '../src/modules/home/components/Tokens/Tokens';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PrimeSea | Home</title>
      </Head>
      <div className="max-w-screen">
        <Header />
        <Hero />
        <About />
        <Tokens />
        <Possibilities />
        <Footer />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? '')),
    },
  };
};

export default Home;
