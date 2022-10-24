import { ReactNode, useMemo } from 'react';

import {
  W3blockAuthenticationContext,
  IW3blockAuthenticationContext,
  CredentialProviderName,
} from '@w3block/w3block-ui-sdk';
import { signIn, signOut } from 'next-auth/react';

interface Props {
  children: ReactNode;
}

const W3blockAuthenticationProvider = ({ children }: Props) => {
  const value = useMemo<IW3blockAuthenticationContext>(
    () => ({
      signIn: (payload) =>
        signIn(CredentialProviderName.SIGNIN_WITH_COMPANY_ID, {
          ...payload,
          redirect: false,
          callbackUrl: undefined,
        }),
      changePasswordAndSignIn: (payload) =>
        signIn(CredentialProviderName.CHANGE_PASSWORD_AND_SIGNIN, {
          ...payload,
          redirect: false,
          callbackUrl: undefined,
        }),
      signOut: () => signOut({ redirect: false, callbackUrl: undefined }),
    }),
    []
  );

  return (
    <W3blockAuthenticationContext.Provider value={value}>
      {children}
    </W3blockAuthenticationContext.Provider>
  );
};

export default W3blockAuthenticationProvider;
