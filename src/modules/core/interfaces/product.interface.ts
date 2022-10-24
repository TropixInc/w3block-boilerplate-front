import { ChainIds } from '../constants/ChainIds';
import ImageInterface from './image.interface';
import PriceInterface from './price.interface';

export default interface ProductInterface {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  companyId: string;
  name: string;
  description: string;
  images: ImageInterface[];
  prices: PriceInterface[];
  distributionType: string;
  pricingType: string;
  contractAddress: string;
  chainId: ChainIds;
  startSaleAt?: Date;
  endSaleAt?: Date;
  status: string;
  draftData?: unknown;
  tags?: unknown;
  stockAmount: number;
  tokensAmount: number;
  canPurchase: boolean;
}
