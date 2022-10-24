import '@w3block/w3block-ui-sdk/dist/style.css';
import '../src/modules/core/styles/globals.css';
import '../src/modules/home/components/Hero/styles/hero.css';
import '../src/modules/home/components/about/styles/about.css';
import '../src/modules/home/components/Tokens/styles/Tokens.css';
import '../src/modules/home/components/Possibilities/styles/possibilities.css';

import { FC, useRef } from 'react';
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import { Session } from 'inspector';
import { SessionProvider } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';

import i18nextConfig from '../next-i18next.config';
import W3blockUISdkProvider from '../src/modules/core/providers/W3blockUISDKProvider';

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
  dehydratedState: DehydratedState;
}>) {
  const queryClient = useRef(new QueryClient());

  return (
    <>
      <QueryClientProvider client={queryClient.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <W3blockUISdkProvider>
            <Component {...pageProps} />
          </W3blockUISdkProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

const AppWithI18n = appWithTranslation(MyApp as FC, i18nextConfig);

const AppWithAuth = (props) => (
  <SessionProvider
    session={props.pageProps.session}
    refetchInterval={120}
    refetchOnWindowFocus
  >
    <AppWithI18n {...props} />
  </SessionProvider>
);

export default AppWithAuth;
