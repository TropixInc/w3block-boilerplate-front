import { CheckoutConfirmationTemplate } from '@w3block/w3block-ui-sdk';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Header from '../../../src/modules/core/components/Header/Header';

const _CheckoutConfirmation = () => {
  return (
    <div>
      <CheckoutConfirmationTemplate />
    </div>
  );
};

const CheckoutConfirmationPage = () => {
  return (
    <>
      <Header />
      <_CheckoutConfirmation></_CheckoutConfirmation>
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
export default CheckoutConfirmationPage;
