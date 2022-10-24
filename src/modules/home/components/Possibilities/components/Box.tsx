import { useRef, useState } from 'react';

export interface PossibilitiesBoxInfoInterface {
  position: number;
  mainInfo: string;
  body: string;
}

interface PossibilitiesBoxProps {
  uniqueId: string;
  info: PossibilitiesBoxInfoInterface;
  opened?: boolean;
}

export default function PossibilitiesBox({
  uniqueId,
  info,
  opened = false,
}: PossibilitiesBoxProps) {
  const [video1, setVideo1] = useState(opened);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video1BackRef = useRef<HTMLVideoElement>(null);

  const video1Toogle = () => {
    const video = document.getElementById(uniqueId) as HTMLVideoElement;
    video.currentTime = 0;
    const video2 = document.getElementById(`${uniqueId}1`) as HTMLVideoElement;
    video2.currentTime = 0;
    if (video1) {
      video1BackRef.current?.play();
    } else {
      video1Ref.current?.play();
    }

    setTimeout(() => {
      setVideo1(!video1);
    }, 1200);
  };
  return (
    <div className="w-[270px]">
      <video
        playsInline
        muted
        controls={false}
        id={`${uniqueId}`}
        onClick={video1Toogle}
        ref={video1BackRef}
        className={`w-full cursor-pointer  ${!video1 ? 'hidden' : ''}`}
      >
        <source
          src={require('../../../../../assets/videos/bau_F.webm')}
          type="video/webm"
        />
        <source
          src={require('../../../../../assets/videos/bau_F.mov')}
          type="video/quicktime"
        />
      </video>
      <video
        muted
        controls={false}
        playsInline
        id={`${uniqueId}1`}
        onClick={video1Toogle}
        ref={video1Ref}
        className={`w-full cursor-pointer  ${video1 ? 'hidden' : ''}`}
      >
        <source
          src={require('../../../../../assets/videos/bau.webm')}
          type="video/webm"
        />
        <source
          src={require('../../../../../assets/videos/bau.mov')}
          type="video/quicktime"
        />
      </video>
      <div className="px-5 -mt-[36px]">
        <div
          className={`w-full ${video1 ? 'bg-[#b57634]' : 'bg-[#2e597e]'}  px-4`}
        >
          <div className="flex items-center justify-center gap-x-[16px]">
            <p className="font-roboto font-bold text-white text-[60px]">
              {info.position}
            </p>
            <p className="font-roboto text-white text-[16px] leading-[18px]">
              {info.mainInfo}
            </p>
          </div>
          <div
            className={`w-full h-[2px] ${
              video1 ? 'bg-[#885927]' : 'bg-[#2e597e]'
            }  `}
          ></div>
          {video1 && (
            <p className="text-white font-roboto text-xs mt-[26px] pb-[60px] transition-all">
              {info.body}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
