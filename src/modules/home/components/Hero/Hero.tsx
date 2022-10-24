import { useState } from 'react';

import { CTAButton } from '../../../core/components/CTAButton/CTAButton';
import CTADiscord from '../../../core/components/CTADiscord/CTADiscord';
import BrandsCarousel from './components/BrandsCarousel';
import HeroCarrousel from './components/Carrousel';

interface HeroContentInterface {
  mainTitle: string;
  subtitle: string;
  disabled: boolean;
  knowMoreLocation?: string;
  buyLocation?: string;
}

export default function Hero() {
  const [mainView, setMainView] = useState<number>(0);
  const goToknowMore = () => {
    const itemToScroll = document.getElementById('tokens');
    itemToScroll?.scrollIntoView({ behavior: 'smooth' });
  };

  const rightContent = (): HeroContentInterface => {
    switch (mainView) {
      case 0:
        return {
          disabled: false,
          mainTitle: 'PrimeSea: O clube dos clubes.',
          subtitle:
            'PrimeSea traz o acesso ao pré-lançamento (whitelist) dos melhores clubes e projetos construídos no meio brasileiro de web3, exclusivamente para membros. Nós fazemos o deep dive para você!',
        };
      case 2:
        return {
          disabled: true,
          mainTitle: 'Food Busters São Paulo',
          subtitle:
            'Um clube de gastronomia para benefícios, experiências, acessos especiais, imersões com chefs renomados, viagens e rotas gastronômicas, jantares exclusivos e descontos em restaurantes, bares e produtos considerados de primeira pelo curador Gabriel Gasparini, o Gaspa do @gaspaindica.',
        };
      case 1:
        return {
          disabled: true,
          mainTitle: 'IRL Sports NFT',
          subtitle:
            'O IRL Sports NFT será a chave de acesso para uma comunidade esportiva com foco em oferta prioritária, acessos, e experiências exclusivas em eventos de diferentes esportes.',
        };
      default:
        return {
          disabled: false,
          mainTitle:
            'O seu acesso seguro a grandes projetos da web3, o futuro da internet.',
          subtitle:
            'Os tokens Shark e Whale te dão acesso à nossa curadoria especializada de projetos, trazendo as melhores comunidades e oportunidades da web3 — nós fazemos o deep dive para você!',
        };
    }
  };

  return (
    <div>
      <div className="fixed bg-brand-primary -z-20 h-screen w-screen top-0"></div>
      <div className="min-h-screen">
        <div className="video-bg-adjustment absolute -z-[5] w-screen min-h-screen"></div>
        <div className="w-screen h-screen absolute -z-10 bg-brand-primary">
          <video
            className="w-screen object-cover sm:h-screen opacity-50"
            muted
            loop
            autoPlay
            playsInline={true}
          >
            <source src="./images/hero_video.mp4" />
          </video>
        </div>

        <div className="container mx-auto flex sm:flex-row flex-col pt-21 sm:pt-[200px] min-h-[700px] sm:min-h-[750px] px-4">
          <div className="flex-1">
            <HeroCarrousel
              actualView={mainView}
              setMainView={(page) => setMainView(page)}
            />
          </div>
          <div className="sm:flex-1 absolute z-20 sm:static max-w-screen sm:w-auto bg-linear-gradientMobile">
            <div className="px-4 pt-[150px] sm:pt-0">
              <p className="font-roboto text-[32px] leading-9 lg:text-[62px] lg:leading-[60px] font-light text-white">
                {rightContent().mainTitle}
              </p>
              <p className="font-roboto text-sm lg:text-base leading-5 lg:leading-[21px] font-light text-white max-w-[570px] mt-[28px]">
                {rightContent().subtitle}
              </p>
              <div className="flex mt-9 sm:mt-[64px] gap-4 sm:gap-x-[40px]">
                {rightContent().disabled ? (
                  <button
                    disabled={true}
                    className="py-2 lg:py-3 px-[38px] bg-[#8ea5b1] opacity-70 text-xs lg:text-sm text-white font-roboto font-medium"
                  >
                    Em breve
                  </button>
                ) : (
                  <>
                    <CTAButton
                      onClick={goToknowMore}
                      className=" text-[#1e9cd6] flex-1 sm:flex-none w-full sm:w-[190px]"
                    >
                      Seja membro
                    </CTAButton>
                    <CTADiscord className="flex-1 sm:flex-none w-full sm:w-[190px] sm:px-[38px]" />
                  </>
                )}
              </div>
            </div>
            <div className="sm:hidden">
              <BrandsCarousel
                actualView={mainView}
                setActualPage={(page) => setMainView(page)}
              />
            </div>
          </div>
        </div>

        <div className="hidden sm:block">
          <BrandsCarousel
            actualView={mainView}
            setActualPage={(page) => setMainView(page)}
          />
        </div>
      </div>
    </div>
  );
}
