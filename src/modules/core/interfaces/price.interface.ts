import CurrencyInterface from './currency.interface';

export default interface PriceInterface {
  amount: string;
  currencyId: string;
  currency: CurrencyInterface;
}
