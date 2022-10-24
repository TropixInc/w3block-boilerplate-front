/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import mockFood from '../../../../../assets/images/food_busters.png';
import mockAnker from '../../../../../assets/images/IRL.png';
import mockWhale from '../../../../../assets/images/mockup_whale.png';

interface HeroCarouselProps {
  actualView?: number;
  setMainView?: (index: number) => void;
}

export default function HeroCarrousel({
  actualView,
  setMainView,
}: HeroCarouselProps) {
  const [mocks, _] = useState([mockWhale, mockAnker, mockFood]);
  const [internMainView, setInterMainView] = useState(0);

  const mainView = actualView ? actualView : internMainView;

  const onMainViewChange = setMainView ? setMainView : setInterMainView;

  const classes = (index: number) => {
    if (index === mainView) {
      return 'main-card';
    } else {
      if (
        index + 1 == mainView ||
        (index == mocks.length - 1 && mainView == 0)
      ) {
        return 'left-card';
      } else if (
        mainView + 1 == index ||
        (mainView == mocks.length - 1 && index == 0)
      ) {
        return 'right-card';
      }
    }
    return 'not-show';
  };

  return (
    <div className="scale-[0.5] sm:scale-[0.7]  lg:scale-[0.8] lg:mr-[220px] xl:scale-[0.9]">
      {mocks.map((whale, index) => {
        return (
          <div
            onClick={() => onMainViewChange(index)}
            key={index}
            className={`${classes(index)} `}
          >
            <img
              className="object-contain max-h-[510px]"
              src={whale.src}
              alt={whale.src}
            />
          </div>
        );
      })}
    </div>
  );
}
