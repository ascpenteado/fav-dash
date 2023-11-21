import { ConfirmDeleteModal } from '@components';
import { FC } from 'react';
import { modalActions } from '../../store/modal/modal.actions';

type ConfirmModalProps = {
  confirmText: string;
  onConfirm: () => void;
};

const ConfirmModal: FC<ConfirmModalProps> = ({ confirmText, onConfirm }) => {
  const handleCancel = () => {
    modalActions.closeModal();
  };

  return (
    <ConfirmDeleteModal
      confirmText={confirmText}
      onCancel={handleCancel}
      onDelete={onConfirm}
    />
  );
};

export default ConfirmModal;
