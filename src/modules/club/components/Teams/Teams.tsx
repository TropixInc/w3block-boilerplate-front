/* eslint-disable @next/next/no-img-element */
import TeamImage from '../../../../assets/images/team_image.png';

interface PlayerProps {
  className?: string;
}
const Player = ({ className = '' }: PlayerProps) => {
  return (
    <div className={` ${className}`}>
      <div className="border border-[white] w-full h-[250px] rounded-[42px] overflow-hidden">
        <img src={TeamImage.src} alt="" />
      </div>
      <p className="text-white font-roboto font-bold text-[22px] mt-6">
        Nome da pessoa
      </p>
      <p className="font-roboto text-white text-sm">@instagram</p>
    </div>
  );
};

interface TeamsProps {
  className?: string;
}
const Teams = ({ className = '' }: TeamsProps) => {
  return (
    <div className={`${className}`}>
      <p className="font-roboto text-[50px] text-[#5a9dbf] text-center">
        Teams
      </p>
      <div className="flex justify-between gap-x-4 mt-[100px]">
        <Player />
        <Player />
        <Player />
        <Player />
      </div>
    </div>
  );
};

export default Teams;
