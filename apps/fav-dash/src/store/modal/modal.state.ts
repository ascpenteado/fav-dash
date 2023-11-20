import { proxy } from 'valtio';

export type ModalStateType = {
  isOpen: boolean;
  content: {
    Component: React.FC<any>;
    props: any;
  } | null;
};

export const modalStore = proxy<ModalStateType>({
  isOpen: false,
  content: null,
});
