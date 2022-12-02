import { SetCodeToCompleteProfileTemplate } from '@w3block/w3block-ui-sdk';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import TabPageTitle from '../../../../src/modules/core/components/TabPageTitle/TabPageTitle';

const VerifySignUpCodePage = () => {
  return (
    <>
      <TabPageTitle pageTitle={'Verificar conta'} />
      <SetCodeToCompleteProfileTemplate />
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

export default VerifySignUpCodePage;
