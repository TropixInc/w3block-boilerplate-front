import { WalletInternalTemplate } from '@w3block/w3block-ui-sdk';

import Footer from '../../src/modules/core/components/Footer/Footer';
import Header from '../../src/modules/core/components/Header/Header';

const WalletPage = () => {
  return (
    <div>
      <Header />
      <WalletInternalTemplate />
      <Footer />
    </div>
  );
};

export default WalletPage;
