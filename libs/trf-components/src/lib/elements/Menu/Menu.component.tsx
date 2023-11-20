import { FC } from 'react';
import s from './Menu.style.module.scss';
import Icon from '../Icon/Icon.component';
import logo from '../../../assets/svg/logo-transfeera-color.svg';
import close from '../../../assets/svg/close-menu.svg';
import classNames from 'classnames';

interface MenuProps {
  showClose: boolean;
  onClose: () => void;
}

const Menu: FC<MenuProps> = ({ showClose, onClose }) => {
  const navbarClasses = classNames({
    [s.navbar]: true,
    [s.showClose]: showClose,
  });

  return (
    <>
      <div className={s.logoWrapper}>
        <Icon iconUrl={logo} withCurrentColor={false}></Icon>
      </div>
      <div className={s.navWrapper}>
        <nav className={navbarClasses}>
          <ul className={s.navigation}>
            <li className={s.navItem}>Seus favorecidos</li>
          </ul>
          <div className={s.iconWrapper} onClick={onClose}>
            <Icon iconUrl={close}></Icon>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Menu;
