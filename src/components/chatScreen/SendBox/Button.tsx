import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick: () => void;
  className?: string;
}

export const Button = ({
  text,
  onClick,
  className = '',
  onMouseEnter,
  onMouseLeave,
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`border-[1px] py-2 px-5 font-medium bg-[#f9f9f9] rounded-lg hover:border-[#646cff] ${className}`}
      onClick={() => onClick()}
      {...rest}
    >
      {text}
    </button>
  );
};
