/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';

import LeftArrow from '../../../../assets/images/left_arrow.png';

interface BackButtonProps {
  path?: string;
}

export default function BackButton({ path = 'Home - ' }: BackButtonProps) {
  const router = useRouter();
  return (
    <div>
      <div
        onClick={() => router.back()}
        className="flex w-[120px] gap-x-4 cursor-pointer items-center"
      >
        <div className="bg-white flex justify-center items-center w-9 h-9 rounded-full">
          <img src={LeftArrow.src} alt="LeftArrow" />
        </div>
        <p className="text-white font-roboto">Voltar</p>
      </div>
      <p className="text-white text-xs ml-[54px] mt-3 font-roboto">{path}</p>
    </div>
  );
}
