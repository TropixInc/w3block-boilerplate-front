/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import { StaticImageData } from 'next/image';

import FoodbusterLogo from '../../../../../assets/images/food_white_logo.png';
import IrlLogo from '../../../../../assets/images/irl_white_logo.png';
import PrimeSeaLogo from '../../../../../assets/images/primesea_white_logo.png';

interface BrandsCarouselProps {
  brands?: StaticImageData[];
  actualView?: number;
  setActualPage?: (index: number) => void;
}

export default function BrandsCarousel({
  brands,
  actualView,
  setActualPage,
}: BrandsCarouselProps) {
  const [view, setView] = useState(0);
  const brandsToShow = brands
    ? brands
    : [PrimeSeaLogo, IrlLogo, FoodbusterLogo];

  const mainView = actualView ?? view;

  const setMainView = setActualPage ? setActualPage : setView;

  const classes = (index: number) => {
    if (index === mainView) {
      return 'main-logo';
    } else {
      if (
        index + 1 == mainView ||
        (index == brandsToShow.length - 1 && mainView == 0)
      ) {
        return 'left-logo';
      } else if (
        mainView + 1 == index ||
        (mainView == brandsToShow.length - 1 && index == 0)
      ) {
        return 'right-logo';
      }
    }
    return 'not-show-logo';
  };
  return (
    <div className=" container mx-auto mt-23 sm:mt-4 xl:mt-20 flex items-center">
      <div className="w-full px-4 sm:w-1/2 flex items-center justify-between">
        <p
          onClick={() =>
            setMainView(mainView == 0 ? brandsToShow.length - 1 : mainView - 1)
          }
          className=" left-arrow right-arrow text-[25px] text-white font-bold cursor-pointer"
        >
          {'<'}
        </p>
        <div className="sm:relative w-full flex items-center justify-between sm:justify-center">
          {brandsToShow.map((brand, index) => {
            return (
              <img
                className={`w-[90px] object-contain sm:absolute ${classes(
                  index
                )}`}
                key={index}
                src={brand.src}
                alt="t"
                onClick={() => setMainView(index)}
              />
            );
          })}
        </div>
        <p
          onClick={() =>
            setMainView(mainView == brandsToShow.length - 1 ? 0 : mainView + 1)
          }
          className=" right-arrow text-[25px] text-white font-bold cursor-pointer"
        >
          {'>'}
        </p>
      </div>
    </div>
  );
}
