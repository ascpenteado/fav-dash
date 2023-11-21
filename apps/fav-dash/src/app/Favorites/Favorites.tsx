import ConfirmModal from '../../components/ConfirmModal/ConfirmModal';
import { Header, Loader } from '@components';
import List from '../../components/List/List';
import { useCallback, useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { toastActions } from '../../store/toast/toast.actions';
import { v4 as uuidv4 } from 'uuid';
import { Receiver } from '../../types/api.type';
import { useSnapshot } from 'valtio';
import { loaderStore } from '../../store/loader/loader.state';
import { loaderActions } from '../../store/loader/loader.actions';
import { modalActions } from '../../store/modal/modal.actions';
import { receiverActions } from '../../store/receivers/receivers.action';
import { receiverStore } from '../../store/receivers/receivers.state';
import { navbarActions } from '../../store/navbar/navbar.actions';

const Favorites = () => {
  const [filteredData, setFilteredData] = useState<Receiver[]>([]);
  const [filter, setFilter] = useState<string>('');
  const receiverState = useSnapshot(receiverStore);
  const { isLoading } = useSnapshot(loaderStore);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      loaderActions.setIsLoading(true);
      const response = await api.get<Receiver[]>('/receivers', {
        _sort: 'created_at',
        _order: 'desc',
      });

      receiverActions.loadInitialReceivers([...response]);
    } catch (err) {
      toastActions.addToast({
        id: uuidv4(),
        message: 'Erro ao conectar com a API',
        type: 'error',
      });
      console.error('Error fetching data:', err);
    } finally {
      loaderActions.setIsLoading(false);
    }
  };

  const deleteSelected = async (selectedFavorites: Receiver[]) => {
    loaderActions.setIsLoading(true);
    modalActions.closeModal();
    try {
      for (const selectedItem of selectedFavorites) {
        await api.delete(`receivers/${selectedItem.id}`);

        receiverActions.removeReceiver(selectedItem.id);

        // Added this timeout to prevent json-server from crashing
        // when bulk deleting
        await new Promise((resolve) => setTimeout(resolve, 300));
      }

      toastActions.addToast({
        id: uuidv4(),
        message:
          selectedFavorites.length > 1
            ? 'Favorecidos deletados com sucesso'
            : 'Favorecido deletado com sucesso',
        type: 'success',
      });
    } catch (error) {
      toastActions.addToast({
        id: uuidv4(),
        message: 'Erro ao deletar favorecido.',
        type: 'error',
      });

      console.error('Error deleting selected items:', error);
    } finally {
      loaderActions.setIsLoading(false);
    }
  };

  const handleDeleteSelected = async (selectedFavorites: Receiver[]) => {
    modalActions.openModal(ConfirmModal, {
      confirmText:
        selectedFavorites.length > 1
          ? 'Confirma a exclusão dos selecionados?'
          : 'Confirma a exclusão do selecionado?',
      onConfirm: async () => await deleteSelected(selectedFavorites),
    });
  };

  const filterList = useCallback(() => {
    const filtered = receiverState.receivers.filter((favorite) => {
      const { name, tax_id, bank_code, account } = favorite || {};
      const filterText = filter.toLowerCase();

      const checkName = name?.toLowerCase().includes(filterText);
      const checkTaxId = tax_id?.toLowerCase().includes(filterText);
      const checkBankcode = bank_code?.toLowerCase().includes(filterText);
      const checkAccount = account?.toLowerCase().includes(filterText);

      const validation = [checkName, checkTaxId, checkBankcode, checkAccount];

      return validation.some((value) => value === true);
    });

    setFilteredData(filtered);
  }, [filter, receiverState.receivers]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterList();
  }, [filterList]);

  return (
    <>
      {isLoading && <Loader />}
      <Header
        label="Seus Favorecidos"
        onAddFav={() => {
          navigate('/novo');
          navbarActions.showCloseIcon(true);
        }}
        onChangeFilter={(filter: string) => setFilter(filter)}
      ></Header>

      <List listData={filteredData} onDeleteSelected={handleDeleteSelected} />
    </>
  );
};

export default Favorites;
