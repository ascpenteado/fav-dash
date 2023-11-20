import { AddForm } from '@components';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { api } from '../../services/api';
import { toastActions } from '../../store/toast/toast.actions';
import { Receiver } from '../../types/api.type';
import { formatDate } from '../../utils/format-date';
import { FormValues } from '@components/lib/interface/compositions/AddForm/AddForm.component';

const AddFavorite = () => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate('/');
  };

  const handleSave = async (data: FormValues) => {
    const { name, email, pixType, pixKey, taxId } = data;

    const id = uuidv4();
    try {
      const payload: Receiver = {
        id,
        name,
        email,
        pix_key_type: pixType,
        pix_key: pixKey,
        tax_id: taxId,
        account: null,
        account_type: null,
        bank_code: null,
        bank_name: null,
        branch: null,
        created_at: formatDate(Date.now()),
        updated_at: formatDate(Date.now()),
        status: 'rascunho',
      };
      await api.post('receivers', payload);

      toastActions.addToast({
        id,
        message: 'Favorecido adicionado com sucesso',
        type: 'success',
      });

      setTimeout(() => {
        navigate('/');
      }, 300);
    } catch (error) {
      toastActions.addToast({
        id,
        message: 'Erro ao criar favorecido.',
        type: 'error',
      });
    }
  };

  return <AddForm onCancel={handleCancel} onSave={handleSave} />;
};

export default AddFavorite;
