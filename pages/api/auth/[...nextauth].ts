import { getNextAuthConfig } from '@w3block/w3block-ui-sdk';
import NextAuth from 'next-auth';

export default NextAuth(
  getNextAuthConfig({
    secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET ?? '',
    baseURL: process.env.NEXT_PUBLIC_PIXWAY_ID_API_URL ?? '',
  })
);
