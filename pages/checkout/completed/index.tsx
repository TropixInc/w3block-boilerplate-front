import { CheckoutDoneTemplate } from '@w3block/w3block-ui-sdk';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Header from '../../../src/modules/core/components/Header/Header';

const _CheckoutCompleted = () => {
  return (
    <div>
      <CheckoutDoneTemplate />
    </div>
  );
};

const CheckoutCompletedPage = () => {
  return (
    <>
      <Header />
      <_CheckoutCompleted></_CheckoutCompleted>
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
export default CheckoutCompletedPage;
