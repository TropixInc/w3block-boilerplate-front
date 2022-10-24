import DiscordIcon from '../../../../assets/icons/DiscordIcon';

export enum SocialIconTypes {
  DISCORD,
}

interface SocialIconProps {
  iconType?: SocialIconTypes;
  iconColor?: string;
  className?: string;
  type?: 'filled' | 'outlined' | 'none';
  href?: string;
}

const SocialIcon = ({
  iconType,
  className,
  type,
  iconColor = 'white',
  href,
}: SocialIconProps) => {
  const filled = 'bg-white';
  const outlined = 'border border-white';

  const getClasse = () => {
    if (type == 'filled') return filled;
    else if (type == 'outlined') return outlined;
  };

  const getIcon = () => {
    switch (iconType) {
      case SocialIconTypes.DISCORD:
        return <DiscordIcon className="w-6" fillColor={iconColor} />;
      default:
        return <DiscordIcon className="w-6" fillColor={iconColor} />;
    }
  };

  return (
    <a
      target={'_blank'}
      href={href}
      className={` flex items-center justify-center w-10 h-10 rounded-full cursor-pointer ${getClasse()} ${className}`}
      rel="noreferrer"
    >
      {getIcon()}
    </a>
  );
};

export default SocialIcon;
