import { SignInTemplateSDK } from '@w3block/w3block-ui-sdk';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import TabPageTitle from '../../../src/modules/core/components/TabPageTitle/TabPageTitle';
import { AppRoutes } from '../../../src/modules/core/constants/AppRoutes';

const SignIn = () => {
  return (
    <>
      <TabPageTitle pageTitle="Login" />
      <SignInTemplateSDK defaultRedirectRoute={AppRoutes.HOME} />
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

export default SignIn;
