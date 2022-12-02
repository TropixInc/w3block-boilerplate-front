import { CompleteProfileCustomTemplate } from '@w3block/w3block-ui-sdk';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import TabPageTitle from '../../../src/modules/core/components/TabPageTitle/TabPageTitle';

const CompleteProfilePage = () => {
  const [translate] = useTranslation();
  return (
    <>
      <TabPageTitle pageTitle={translate('auth>signUp>tabTitle')} />
      <CompleteProfileCustomTemplate />
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
export default CompleteProfilePage;
