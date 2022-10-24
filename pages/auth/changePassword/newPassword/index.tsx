import { ResetPasswordTemplate } from '@w3block/w3block-ui-sdk';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import TabPageTitle from '../../../../src/modules/core/components/TabPageTitle/TabPageTitle';

const NewPassword = () => {
  const [translate] = useTranslation();
  return (
    <>
      <TabPageTitle pageTitle={translate('auth>resetPassword>tabTitle')} />
      <ResetPasswordTemplate />
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

export default NewPassword;
