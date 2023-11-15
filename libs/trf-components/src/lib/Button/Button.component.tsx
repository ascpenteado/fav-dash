import { FC, ReactNode, MouseEvent } from 'react';
import cn from 'classnames';
import s from './Button.style.module.scss';
import { ThemeColors } from '../../types/Colors';

interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  disabled?: boolean;
  outline?: boolean;
  variant: ThemeColors;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  outline,
  variant,
}) => {
  const btnVariant = outline ? `${variant}-outline` : variant;

  console.log('>> variant', variant);
  console.log('>> outline', outline);

  console.log('>> btnVariant', btnVariant);

  const classes = cn({
    [s.btn]: true,
    [s.outline]: !!outline,
    [s.disabled]: !!disabled,
    [s[`${btnVariant}`]]: !!btnVariant,
  });
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classes}
      tabIndex={disabled ? -1 : 0} // Ensure the button is not focusable when disabled
      aria-disabled={disabled} // Indicate the button's state for screen readers
    >
      {children}
    </button>
  );
};

export default Button;
