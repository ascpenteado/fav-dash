import { DraftForm } from '@components';
import { FC } from 'react';
import { Receiver } from '../../types/api.type';
import { modalActions } from '../../store/modal/modal.actions';
import { api } from '../../services/api';
import { toastActions } from '../../store/toast/toast.actions';
import { FormValues } from '@components/lib/interface/compositions/AddForm/AddForm.component';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import { receiverActions } from '../../store/receivers/receivers.action';

export type DraftModalContentProps = {
  favorite: Receiver;
};

const DraftModalContent: FC<DraftModalContentProps> = ({ favorite }) => {
  const handleCancel = () => {
    modalActions.closeModal();
  };
  const handleSave = async (data: Partial<FormValues>, id: string) => {
    try {
      const favToBeUpdated = await api.get<Receiver>(`receivers/${id}`);

      const payload: Receiver = {
        ...favToBeUpdated,
        id,
        name: data.name ?? '',
        email: data.email ?? '',
        pix_key_type: data.pixType ?? '',
        pix_key: data.pixKey ?? '',
        tax_id: data.taxId ?? '',
      };

      await api.put(`receivers/${id}`, payload);

      toastActions.addToast({
        id: Date.now().toString(),
        message: 'Favorecido alterado com sucesso',
        type: 'success',
      });

      receiverActions.updateReceiver(id, payload);
    } catch (error) {
      toastActions.addToast({
        id: Date.now().toString(),
        message: 'Erro ao atualizar favorecido.',
        type: 'error',
      });

      console.error('Error updating favorite:', error);
    } finally {
      modalActions.closeModal();
    }
  };

  const deleteSelected = async (id: string) => {
    try {
      await api.delete(`receivers/${id}`);

      toastActions.addToast({
        id: Date.now().toString(),
        message: 'Favorecido deletado com sucesso',
        type: 'success',
      });

      receiverActions.removeReceiver(id);
    } catch (error) {
      toastActions.addToast({
        id: Date.now().toString(),
        message: 'Erro ao deletar favorecido.',
        type: 'error',
      });

      console.error('Error deleting favorite:', error);
    } finally {
      modalActions.closeModal();
    }
  };

  const handleDelete = async (favorite: Receiver) => {
    if (!favorite.id) return;

    modalActions.openModal(ConfirmModal, {
      confirmText: `Confirma a exclusão de ${favorite.name}?`,
      onConfirm: async () => await deleteSelected(favorite.id),
    });
  };

  return (
    <DraftForm
      onCancel={handleCancel}
      onSave={handleSave}
      onDelete={handleDelete}
      favorite={favorite}
    />
  );
};

export default DraftModalContent;
