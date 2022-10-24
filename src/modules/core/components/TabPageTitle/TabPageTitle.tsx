import Head from 'next/head';

interface Props {
  pageTitle: string;
}

const TabPageTitle = ({ pageTitle }: Props) => {
  return (
    <Head>
      <title>PrimeSea | {pageTitle}</title>
    </Head>
  );
};

export default TabPageTitle;
