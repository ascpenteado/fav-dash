import { FC } from 'react';
import { modalStore } from './modal.state';

export const modalActions = {
  openModal: (content: FC<any>, props: any) => {
    modalStore.isOpen = true;
    modalStore.content = {
      Component: content,
      props,
    };
  },

  closeModal: () => {
    modalStore.isOpen = false;
    modalStore.content = null;
  },
};
