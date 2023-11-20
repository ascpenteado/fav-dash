import React, { FC, useEffect, useState } from 'react';
import s from './Modal.style.module.scss';
import Icon from '../../elements/Icon/Icon.component';
import closeIcon from '../../../assets/svg/close-modal.svg';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(isOpen);

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    onClose();
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    setIsModalOpen(isOpen);
  }, [isOpen]);

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <button className={s.closeButton} onClick={closeModal}>
          <Icon iconUrl={closeIcon} withCurrentColor={false} />
        </button>
        <div className={s.content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
