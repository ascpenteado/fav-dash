import { proxy } from 'valtio';

export type NavbarStateProps = {
  showCloseIcon: boolean;
};

export const navbarStore = proxy<NavbarStateProps>({
  showCloseIcon: false,
});
