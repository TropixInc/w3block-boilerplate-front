import { DefaultSession } from 'next-auth';
import { DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    accessToken: string | undefined;
    refreshToken: string | undefined;
    user: {
      accessToken: string | undefined;
      refreshToken: string | undefined;
    } & DefaultSession['user'];
    id: string | undefined;
    sub: string | undefined;
    error: string | undefined;
  }

  interface User {
    id: string;
    email?: string;
    name?: string;
    accessToken: string | undefined;
    refreshToken: string | undefined;
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    accessToken: string | undefined;
    refreshToken: string | undefined;
    error: string | undefined;
    sub: string | undefined;
    picture: string | undefined;
    name: string | undefined;
    email: string | undefined;
    accessTokenExpires: number | undefined;
    user: {
      accessToken: string | undefined;
    } & DefaultJWT['user'];
  }
}
