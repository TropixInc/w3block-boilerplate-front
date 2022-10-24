import { AddFundsManualTemplateSDK } from '@w3block/w3block-ui-sdk';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Footer from '../../../../src/modules/core/components/Footer/Footer';
import Header from '../../../../src/modules/core/components/Header/Header';

const AddFundsTypeManual = () => {
  return (
    <>
      <Header />
      <AddFundsManualTemplateSDK />
      <Footer />
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

export default AddFundsTypeManual;
