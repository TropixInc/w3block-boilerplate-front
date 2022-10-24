import { ReactNode } from 'react';

export interface ClubsContentInterface {
  path: string;
  title: string;
  content: string;
  image: ReactNode | string;
  CTA?: ReactNode;
}
