/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import SharkToken from '../../../../assets/images/shark_token.png';
import WhaleToken from '../../../../assets/images/whale_token.png';
import Modal from '../../../core/components/Modal/Modal';
import { AppRoutes } from '../../../core/constants/AppRoutes';
import useProducts from '../../../core/hooks/useProducts/useProducts';
import SharkTokenContent from './components/SharkTokenContent';
import WhaleTokenContent from './components/WhaleTokenContent';
export default function Tokens() {
  const router = useRouter();
  const [sharkModal, setSharkModal] = useState(false);
  const [whaleModal, setWhaleModal] = useState(false);
  const { data: session } = useSession();
  const { data } = useProducts();
  const scrollToSubscribe = () => {
    const subscribeComp = document.getElementById('subscribed');
    subscribeComp?.scrollIntoView({ behavior: 'smooth' });
  };

  const beMemberShark = () => {
    const sharkProduct = data?.data.items.find(
      (tk) => tk.name == 'Shark Token '
    );
    if (!session) {
      router.push(AppRoutes.LOGIN);
    } else if (sharkProduct?.canPurchase && session) {
      router.push(
        AppRoutes.CHECKOUT_CONFIRMATION +
          `?productIds=${sharkProduct.id}&currencyId=${sharkProduct.prices[0].currencyId}`
      );
    } else {
      scrollToSubscribe();
    }
  };

  return (
    <div className="bg-tokens !bg-brand-white-200 pt-[70px] pb-[46px]">
      <div className="container mx-auto">
        <p
          id="tokens"
          className="text-center font-roboto text-[30px] text-white tracking-widest"
        >
          Nossos Tokens
        </p>
        <div className="flex lg:flex-row flex-col items-center sm:items-start justify-center gap-y-12 sm:gap-x-[270px] mt-[50px] px-4">
          <div className="sm:w-[320px] flex flex-col items-center">
            <img className="w-[300px] sm:w-auto" src={SharkToken.src} alt="" />
            <div className="sm:pl-[24px]">
              <p className="font-roboto font-light text-center sm:text-left text-white text-[52px] leading-[56px]">
                Shark
              </p>
              <p className="text-white font-roboto mt-[24px] text-center sm:text-left">
                Invista como um tubarão! Apenas 300 títulos
              </p>
              <div className="flex gap-x-2 justify-center sm:justify-start items-center mt-3">
                <div className="w-2 h-2 rounded-full bg-[#1fa9ed]"></div>
                <p className="font-roboto font-medium text-white text-[12px] ">
                  Comunidade ativa
                </p>
              </div>
              <div className="flex gap-x-4">
                <a
                  onClick={beMemberShark}
                  className=" w-full sm:w-auto mt-4 bg-[#20aaef] cursor-pointer px-6 py-4 flex-1 flex items-center justify-center"
                >
                  <p className=" text-sm text-white font-roboto font-medium flex-1 sm:flex-none cursor-pointer text-center">
                    Seja Membro
                  </p>
                </a>
                <div
                  onClick={() => setSharkModal(true)}
                  className=" w-full sm:w-auto mt-4 cursor-pointer flex-1  px-6 py-4 bg-[#e6e6e6] flex items-center justify-center"
                >
                  <p className="text-xs text-[#222222] font-roboto font-medium flex-1 sm:flex-none cursor-pointer text-center">
                    Saiba mais
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-[320px] flex flex-col items-center">
            <img className="w-[300px] sm:w-auto" src={WhaleToken.src} alt="" />
            <div className="sm:pl-[24px]">
              <p className="font-roboto font-light text-white text-[52px] leading-[56px] text-center sm:text-left">
                Whale
              </p>
              <p className="text-white font-roboto mt-[24px] text-center sm:text-left">
                Seja uma baleia no mercado! Apenas 200 títulos
              </p>
              <div className="flex justify-center sm:justify-start gap-x-2 items-center mt-3">
                <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                <p className="font-roboto font-medium text-white text-[12px]">
                  Em Breve
                </p>
              </div>
              <div className="flex gap-x-4">
                <a className="w-full sm:w-auto mt-4 bg-gray-500 px-6 py-4 flex-1 flex items-center justify-center">
                  <p className=" text-sm text-white font-roboto font-medium flex-1 cursor-default sm:flex-none text-center">
                    Em Breve
                  </p>
                </a>
                <div
                  onClick={() => setSharkModal(true)}
                  className=" w-full sm:w-auto mt-4 cursor-pointer flex-1  px-6 py-4 bg-[#e6e6e6] flex items-center justify-center"
                >
                  <p className="text-xs text-[#222222] font-roboto font-medium flex-1 sm:flex-none cursor-pointer text-center">
                    Saiba mais
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal state={sharkModal} onClose={() => setSharkModal(!sharkModal)}>
        <SharkTokenContent />
      </Modal>
      <Modal state={whaleModal} onClose={() => setWhaleModal(!whaleModal)}>
        <WhaleTokenContent />
      </Modal>
    </div>
  );
}
