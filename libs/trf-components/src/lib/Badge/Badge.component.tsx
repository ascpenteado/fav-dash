import React, { FC } from 'react';
import { ThemeColors } from '../../types/Colors';
import cn from 'classnames';
import s from './Badge.style.module.scss';

type BadgeProps = {
  variant: ThemeColors;
  status: string;
};

const Badge: FC<BadgeProps> = ({ variant, status }) => {
  const classes = cn({
    [s[`${variant}`]]: variant,
    [s.badge]: true,
  });

  return <span className={classes}>{status}</span>;
};

export default Badge;
