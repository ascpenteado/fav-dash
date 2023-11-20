import { ComponentProps, FC } from 'react';
import cn from 'classnames';
import s from './Input.style.module.scss';
import Icon from '../Icon/Icon.component';

type InputProps = {
  hasBorder?: boolean;
  iconUrl?: string;
} & ComponentProps<'input'>;

const Input: FC<InputProps> = ({ hasBorder, iconUrl, ...rest }) => {
  const wrapperClasses = cn({
    [s.wrapper]: true,
  });

  const inputClasses = cn({
    [s.hasBorder]: hasBorder,
    [s.input]: true,
  });

  return (
    <div>
      <div className={wrapperClasses}>
        <input {...rest} className={inputClasses} />

        {iconUrl && (
          <div className={s.iconWrapper}>
            <Icon iconUrl={iconUrl} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
