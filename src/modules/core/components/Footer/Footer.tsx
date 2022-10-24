/* eslint-disable @next/next/no-img-element */
import DiscordIcon from '../../../../assets/icons/DiscordIcon';
import { AppRoutes } from '../../constants/AppRoutes';
interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  return (
    <div className={`bg-black pb-8 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-y-8 gap-x-[40px]">
          <a href={AppRoutes.HOME}>
            <img
              className="h-[50px] object-contain opacity-75 cursor-pointer"
              src={'/logo/Prime_Sea_Branco.svg'}
              alt="Logo PrimeSea"
            />
          </a>
          <div className="flex justify-center items-center sm:gap-x-[40px] gap-x-[10px]">
            <a
              href={AppRoutes.PRIVACYPOLICY}
              className="text-xs sm:text-base text-white font-roboto"
            >
              Política de privacidade
            </a>
            <a
              className="text-xs sm:text-base text-white font-roboto"
              href={AppRoutes.TERMSCONDITIONS}
            >
              Termos e condições
            </a>
            <a
              className="text-xs sm:text-base text-white font-roboto"
              href={AppRoutes.FAQ}
            >
              FAQ
            </a>
            <a
              className="text-xs sm:text-base text-white font-roboto"
              href="mailto:suporte@primesea.io"
            >
              Fale conosco
            </a>
          </div>
        </div>
        <div className="borber-b border-t border-[rgba(255,255,255,0.6)] py-6 mt-6">
          <p className="text-center text-white font-roboto text-xs">
            O clube nao se trata de oferta de valores mobiliários ou
            investimento coletivo, a presente oferta não se trata de{' '}
          </p>
        </div>
        <div className="flex justify-center gap-x-4">
          <a
            target={'_blank'}
            href="https://discord.gg/QxyZBjHUTN"
            className="w-6 h-6 cursor-pointer p-1 rounded-full border border-white"
            rel="noreferrer"
          >
            {' '}
            <DiscordIcon />
          </a>
        </div>
        <a
          href="https://w3block.io"
          className="flex items-center justify-center mt-14"
        >
          <p className="text-center text-white font-roboto text-xs mr-2">
            Powered by
          </p>
          <img
            className="w-[100px] h-[20px]"
            src={'/logo/weblock_logo_white_2.svg'}
            alt="Logo PrimeSea"
          />
        </a>
      </div>
    </div>
  );
}
