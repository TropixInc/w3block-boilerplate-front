import DiscordIcon from '../../../../assets/icons/DiscordIcon';

interface CTADiscordProps {
  className?: string;
}

const CTADiscord = ({ className }: CTADiscordProps) => {
  return (
    <a
      target={'_blank'}
      href="https://discord.gg/QxyZBjHUTN"
      className={`py-2 lg:py-3 bg-[#1e9cd6] flex gap-x-3 items-center justify-center text-xs w-full lg:text-sm text-white font-roboto font-medium cursor-pointer ${className}`}
      rel="noreferrer"
    >
      <div className="w-6 h-6 flex justify-center items-center">
        <DiscordIcon fillColor="white" />
      </div>
      <p className="text-[white] font-roboto font-bold ">Discord</p>
    </a>
  );
};

export default CTADiscord;
