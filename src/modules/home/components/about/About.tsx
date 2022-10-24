/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import BgBig from '../../../../assets/images/about_bg_big.png';
import BgSmall from '../../../../assets/images/about_bg_small.png';
import CTADiscord from '../../../core/components/CTADiscord/CTADiscord';
export default function About() {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div className="-mt-[80px] sm:mt-0 pt-[150px] sm:pt-[120px] background-about pb-[60px] sm:pb-[160px]">
      <div className="container mx-auto">
        <p className="px-4 font-roboto font-bold text-[30px] text-white text-center sm:text-left tracking-widest">
          Sobre o PrimeSea
        </p>
        <div className="flex flex-col sm:flex-row">
          <div className="flex-1 px-4 z-[9999]">
            <div className="relative">
              {!seeMore && (
                <div
                  onClick={() => setSeeMore(true)}
                  className="absolute h-[200px] mt-[100px] w-full overlay-text"
                >
                  <div className="flex justify-center h-full items-end cursor-pointer">
                    <p className="text-white font-roboto text-sm">Veja mais</p>
                  </div>
                </div>
              )}
            </div>
            <div className={`${!seeMore && 'max-h-[300px] overflow-hidden'} `}>
              <p className="font-roboto sm:text-[20px] font-medium text-white mt-10 sm:mt-[20px] text-center sm:text-left">
                O PrimeSea é a porta de entrada em projetos sérios que estão
                reconstruindo a forma de se criar comunidades e negócios
                digitalmente, a partir da tecnologia blockchain.
              </p>
              <p className="font-light text-white font-roboto text-sm sm:text-[20px] mt-[50px] text-center sm:text-left">
                Sempre com propostas de valor e utilidade estruturadas e
                passando pela curadoria da Weblock, essas iniciativas são
                conduzidas por marcas líderes e profissionais de referências em
                diversos setores.
              </p>
              <p className="font-light text-white font-roboto text-sm sm:text-[20px] mt-[32px] text-center sm:text-left">
                A associação ao Prime Sea é feita a partir da compra de uma das
                opções de títulos digitais (NFTs) dos quais dispomos, um de
                categoria utilitária (Shark) e outro com status de investidor
                (Whale).
              </p>
              <p className="font-light text-white font-roboto text-sm sm:text-[20px] mt-[32px] text-center sm:text-left">
                Também é de uso exclusivo dos membros uma comunidade online para
                troca de mensagens e análises, além de eventos presenciais e
                colaborações com nossos projetos parceiros. O clube conta ainda
                com um trabalho educacional aprofundado na inserção de seus
                associados no que há de mais atual no universo da web3, a nova
                fronteira da internet.
              </p>
              <p className="font-light text-white font-roboto text-sm sm:text-[20px] mt-[32px] text-center sm:text-left">
                Esta imersão educacional é produzida por nossas referências
                nacionais e globais no tema, abordando o impacto mundial dessas
                transformações em múltiplos mercados.
              </p>
              <div className="flex justify-center sm:justify-start mt-6">
                <div className="w-[190px]">
                  <CTADiscord />
                </div>
              </div>
              <div
                onClick={() => setSeeMore(false)}
                className="flex justify-center h-full items-end cursor-pointer mt-6"
              >
                <p className="text-white font-roboto text-sm">Veja menos </p>
              </div>
            </div>
          </div>

          <div className="sm:relative absolute flex-1  w-screen opacity-30">
            <img className="big-bg" src={BgBig.src} alt="" />
            <img className="small-bg" src={BgSmall.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
