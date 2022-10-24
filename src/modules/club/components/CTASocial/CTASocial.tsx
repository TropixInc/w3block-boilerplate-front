import SocialIcon from '../../../core/components/SocialIcon/SocialIcon';

interface CTASocialProps {
  className?: string;
}

const CTASocial = ({ className = '' }: CTASocialProps) => {
  return (
    <div className={` ${className}`}>
      <div>
        <p className="text-center text-white font-roboto text-[42px]">
          Acompanhe todas as informações do clube
        </p>
        <div className="flex justify-center gap-x-6 mt-4">
          <SocialIcon type="filled" iconColor="#273d5a" />
        </div>
      </div>
    </div>
  );
};

export default CTASocial;
