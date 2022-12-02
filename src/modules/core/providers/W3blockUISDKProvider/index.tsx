import { ReactNode } from 'react';

import {
  PixwaySessionContext,
  PixwaySDKNextRouterAdapter,
  PixwayUISdkLocale,
  W3blockUISDKGeneralConfigProvider,
} from '@w3block/w3block-ui-sdk';
import { useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import Logo from '../../../../assets/images/primesea_logo_blue.png';
import W3blockAuthenticationProvider from '../W3blockAuthenticationProvider';

interface Props {
  children: ReactNode;
}

const W3blockUISdkProvider = ({ children }: Props) => {
  const session = useSession();
  const router = useRouter();
  const [, i18n] = useTranslation();
  const isDevelopment = process.env.NEXT_PUBLIC_ENVIRONMENT === 'development';

  return (
    <PixwaySessionContext.Provider value={session}>
      <W3blockUISDKGeneralConfigProvider
        isProduction={!isDevelopment}
        api={{
          idUrl: process.env.NEXT_PUBLIC_PIXWAY_ID_API_URL ?? '',
          keyUrl: process.env.NEXT_PUBLIC_PIXWAY_KEY_API_URL ?? '',
          commerceUrl: process.env.NEXT_PUBLIC_COMMERCE_API_URL ?? '',
          pdfUrl: process.env.NEXT_PUBLIC_PDF_API_URL ?? '',
          pollUrl: process.env.NEXT_PUBLIC_POLL_API_URL ?? '',
          passUrl: process.env.NEXT_PUBLIC_PASS_API_URL ?? '',
        }}
        companyId={process.env.NEXT_PUBLIC_COMPANY_ID ?? ''}
        locale={(i18n.language as PixwayUISdkLocale) ?? 'pt-BR'}
        logoUrl={Logo.src}
        appBaseUrl={process.env.NEXT_PUBLIC_BASE_URL ?? ''}
      >
        <W3blockAuthenticationProvider>
          <PixwaySDKNextRouterAdapter router={router}>
            {children}
          </PixwaySDKNextRouterAdapter>
        </W3blockAuthenticationProvider>
      </W3blockUISDKGeneralConfigProvider>
    </PixwaySessionContext.Provider>
  );
};

export default W3blockUISdkProvider;
