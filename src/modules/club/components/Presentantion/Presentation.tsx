/* eslint-disable @next/next/no-img-element */
import FoodBusterMainImage from '../../../../assets/images/foodbusters_club_image.png';

const Presentantion = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-x-16 gap-y-6 justify-between mt-[50px]">
      <div className="flex-1">
        <div className="overflow-hidden w-full h-[550px] rounded-[70px] border-4 border-white">
          <div className="relative">
            <div className="absolute -translate-x-1/2 left-1/2 w-[190px] h-[20px] rounded-b-2xl bg-white"></div>
          </div>
          <img
            className="w-full h-full object-cover"
            src={FoodBusterMainImage.src}
            alt=""
          />
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-white font-roboto text-[42px]">
          Food Busters São Paulo
        </h2>
        <p className="text-[20px] text-white font-roboto pr-4 mt-8">
          Se junte a quem ama comer bem no Food Busters São Paulo! O clube é uma
          iniciativa do Gabriel Gasparini (@GaspaIndica) com os principais chefs
          e embaixadores do universo da boa mesa no Brasil. <br /> <br />O Food
          Busters São Paulo irá trazer para os seus membros benefícios nos
          melhores bares e restaurantes da cidade e experiências gastronômicas
          incríveis como jantares exclusivos, imersões com chefs, harmonizações,
          aulas de culinária e mixologia, acesso vip a eventos, viagens
          enogastronômicas e experiências incríveis da boa mesa na maior capital
          gastronômica do mundo. Faça parte!
        </p>
        <div className="flex w-auto mt-8">
          <a className="bg-[#e6e6e6] flex justify-center items-center cursor-pointer px-6 py-4 ">
            <p className="text-sm text-[#222222] font-roboto font-medium cursor-pointer">
              Seja Membro
            </p>
          </a>
          <div className="bg-white flex justify-center items-center px-4 text-[#1e9cd6] text-2xl cursor-pointer">
            {'>'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentantion;
