import { FC } from 'react';
import s from './Header.style.module.scss';
import Input from '../../../elements/Input/Input.component';
import mag from '../../../../assets/svg/magnifier.svg';
import Icon from '../../../elements/Icon/Icon.component';

import plus from '../../../../assets/svg/plus-icon.svg';

type HeaderProps = {
  label: string;
  onAddFav: () => void;
};

const Header: FC<HeaderProps> = ({ label, onAddFav }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.left}>
          <h2 className={s.title}>{label}</h2>
          <button className={s.plusButton} onClick={onAddFav}>
            <div className={s.iconWrapper}>
              <Icon iconUrl={plus} />
            </div>
          </button>
        </div>
        <div className={s.right}>
          <Input
            type="text"
            placeholder="Nome, CPF, agência ou conta"
            hasBorder={false}
            iconUrl={mag}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
