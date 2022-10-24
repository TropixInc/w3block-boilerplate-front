/* eslint-disable @next/next/no-img-element */
import CTAPrimeSeaMock from '../../../../assets/images/CTAPrimesea_shark_whale.png';

interface CTAPrimeSeaProps {
  className?: string;
}

const CTAPrimesea = ({ className = '' }: CTAPrimeSeaProps) => {
  return (
    <div className={`${className}`}>
      <div className="bg-gradient-to-r from-brand-primary-700 to-brand-primary-0 py-[150px]">
        <div className="container mx-auto">
          <div className="flex justify-center gap-x-20">
            <img className=" w-[400px]" src={CTAPrimeSeaMock.src} alt="" />
            <div className="flex-1 max-w-[500px]">
              <p className="text-white text-[40px] font-roboto leading-12">
                Membro PrimeSea, tem desconto na compra e pre-list garantida.
              </p>
              <div className="flex w-auto mt-8">
                <a className="bg-[#e6e6e6] flex justify-center items-center cursor-pointer px-6 py-4 ">
                  <p className="text-sm text-[#222222] font-roboto font-medium cursor-pointer">
                    Seja membro
                  </p>
                </a>
                <div className="bg-white flex justify-center items-center px-4 text-[#1e9cd6] text-2xl cursor-pointer">
                  {'>'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAPrimesea;
