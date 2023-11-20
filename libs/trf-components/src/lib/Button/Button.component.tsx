import { FC, ReactNode, MouseEvent, ComponentProps } from 'react';
import { Colors, ColorsType } from '../../types/Colors';
import cn from 'classnames';
import s from './Button.style.module.scss';

type ButtonProps = {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  disabled?: boolean;
  outline?: boolean;
  responsive?: boolean;
  variant?: ColorsType;
} & ComponentProps<'button'>;

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  outline,
  variant = Colors.PrimaryColor,
  responsive,
  ...rest
}) => {
  const btnVariant = outline ? `${variant}-outline` : variant;

  const classes = cn({
    [s.btn]: true,
    [s.outline]: !!outline,
    [s.disabled]: !!disabled,
    [s.responsive]: responsive,
    [s[`${btnVariant}`]]: !!btnVariant,
  });

  return (
    <button
      {...rest}
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
