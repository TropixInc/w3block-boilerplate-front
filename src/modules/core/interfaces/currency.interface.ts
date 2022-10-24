import { CurrencyLocale } from '../constants/CurrencyLocale';

export default interface CurrencyInterface {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: CurrencyLocale;
  crypto: boolean;
}
