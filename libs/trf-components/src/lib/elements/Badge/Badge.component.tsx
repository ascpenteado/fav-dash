import React, { FC } from 'react';
import { ColorsType } from '../../../types/Colors';
import cn from 'classnames';
import s from './Badge.style.module.scss';
import { FavoriteStatus } from '../../../types/api';

export type BadgeProps = {
  variant: ColorsType;
  status: FavoriteStatus;
};

const Badge: FC<BadgeProps> = ({ variant, status }) => {
  const classes = cn({
    [s[`${variant}`]]: variant,
    [s.badge]: true,
  });

  return <span className={classes}>{status}</span>;
};

export default Badge;
