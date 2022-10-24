import { ReactNode } from 'react';

interface VideoContainerProps {
  children: ReactNode;
}

const VideoContainer = ({ children }: VideoContainerProps) => {
  return (
    <div className="">
      <div className="fixed bg-brand-primary -z-20 h-screen w-screen top-0"></div>
      <div className="video-bg-adjustment absolute -z-[5] w-screen h-screen"></div>
      <div className="w-screen h-screen absolute -z-10 bg-brand-primary">
        <video
          className="w-screen object-cover sm:h-screen opacity-50"
          muted
          loop
          autoPlay
          playsInline={true}
        >
          <source src="/images/hero_video.mp4" />
        </video>
      </div>
      {children}
    </div>
  );
};

export default VideoContainer;
