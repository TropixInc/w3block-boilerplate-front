import { CheckoutPaymentTemplate } from '@w3block/w3block-ui-sdk';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Header from '../../../src/modules/core/components/Header/Header';

const CheckoutPaymentPage = () => {
  return (
    <>
      <Header />
      <CheckoutPaymentTemplate />
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
export default CheckoutPaymentPage;
