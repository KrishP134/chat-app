// Types
import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  className?: string;
}

export const Button = ({ children, onClick, className = '', ...rest }: ButtonProps): JSX.Element => {
  return (
    <button className={`border-[1px] py-2 px-5  ${className}`} onClick={() => onClick()} {...rest}>
      {children}
    </button>
  );
};
