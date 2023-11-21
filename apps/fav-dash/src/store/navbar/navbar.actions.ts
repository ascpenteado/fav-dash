import { navbarStore } from './navbar.state';

export const navbarActions = {
  showCloseIcon: (showCloseIcon: boolean) => {
    navbarStore.showCloseIcon = showCloseIcon;
  },
};
