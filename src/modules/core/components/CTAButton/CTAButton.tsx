import { ReactNode } from 'react';

interface CTAButonProps {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: ButtonTypes;
}

export enum ButtonTypes {
  FILLED_WHITE,
}

export const CTAButton = ({
  className = '',
  children,
  onClick,
  type = ButtonTypes.FILLED_WHITE,
}: CTAButonProps) => {
  const classes = new Map<ButtonTypes, string>([
    [ButtonTypes.FILLED_WHITE, 'bg-white'],
  ]);

  return (
    <div
      onClick={onClick}
      className={` flex justify-center gap-x-4 items-center py-2 lg:py-3 text-xs lg:text-sm font-roboto font-medium text-center w-full ${classes.get(
        type
      )} ${className}`}
    >
      {children}
    </div>
  );
};
