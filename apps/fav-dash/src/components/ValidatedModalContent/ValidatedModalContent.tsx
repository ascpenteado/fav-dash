import { FC } from 'react';
import { Receiver } from '../../types/api.type';
import { ValidatedForm } from '@components';
import { FormValues } from '@components/lib/interface/compositions/ValidatedForm/ValidatedForm.component';
import { api } from '../../services/api';
import { modalActions } from '../../store/modal/modal.actions';
import { toastActions } from '../../store/toast/toast.actions';

export type ValidatedModalContentProps = {
  favorite: Receiver;
};

const ValidatedModalContent: FC<ValidatedModalContentProps> = ({
  favorite,
}) => {
  const handleCancel = () => {
    modalActions.closeModal();
  };
  const handleSave = async (data: Partial<FormValues>, id: string) => {
    try {
      const favToBeUpdated = await api.get<Receiver>(`receivers/${id}`);

      const payload: Partial<Receiver> = {
        ...favToBeUpdated,
        id,
        email: data.email ?? '',
      };

      await api.put(`receivers/${id}`, payload);

      toastActions.addToast({
        id: Date.now().toString(),
        message: 'Favorecido alterado com sucesso',
        type: 'success',
      });

      modalActions.closeModal();
    } catch (error) {
      toastActions.addToast({
        id: Date.now().toString(),
        message: 'Erro ao atualizar favorecido.',
        type: 'error',
      });

      console.error('Error updating favorite:', error);

      modalActions.closeModal();
    }
  };

  const handleDelete = async (id: string) => {
    if (!id) return;

    try {
      await api.delete(`receivers/${id}`);

      toastActions.addToast({
        id: Date.now().toString(),
        message: 'Favorecido deletado com sucesso',
        type: 'success',
      });

      modalActions.closeModal();
    } catch (error) {
      toastActions.addToast({
        id: Date.now().toString(),
        message: 'Erro ao deletar favorecido.',
        type: 'error',
      });

      console.error('Error deleting favorite:', error);

      modalActions.closeModal();
    }
  };

  return (
    <ValidatedForm
      onCancel={handleCancel}
      onSave={handleSave}
      onDelete={handleDelete}
      favorite={favorite}
    />
  );
};

export default ValidatedModalContent;
