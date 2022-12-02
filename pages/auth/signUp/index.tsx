import { SignUpTemplateSDK } from '@w3block/w3block-ui-sdk';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import TabPageTitle from '../../../src/modules/core/components/TabPageTitle/TabPageTitle';

const SignUpPage = () => {
  const [translate] = useTranslation();
  return (
    <>
      <TabPageTitle pageTitle={translate('auth>signUp>tabTitle')} />
      <SignUpTemplateSDK />
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

export default SignUpPage;
