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
import { modalStore } from '../../store/modal/modal.state';

const Favorites = () => {
  const [data, setData] = useState<Receiver[]>([]);

  const [filteredData, setFilteredData] = useState<Receiver[]>([]);
  const [filter, setFilter] = useState<string>('');

  const { isLoading } = useSnapshot(loaderStore);
  const modalState = useSnapshot(modalStore);

  const navigate = useNavigate();

  const fetchData = async () => {
    loaderActions.setIsLoading(true);

    try {
      const response = await api.get<Receiver[]>('/receivers', {
        _sort: 'created_at',
        _order: 'desc',
      });

      setData(response);
      loaderActions.setIsLoading(false);
    } catch (err) {
      toastActions.addToast({
        id: uuidv4(),
        message: 'Erro ao conectar com a API',
        type: 'error',
      });
      console.error('Error fetching data:', err);
      loaderActions.setIsLoading(false);
    }
  };

  const handleDeleteSelected = async (selectedFavorites: Receiver[]) => {
    loaderActions.setIsLoading(true);
    try {
      for (const selectedItem of selectedFavorites) {
        await api.delete(`receivers/${selectedItem.id}`);

        // Added this timeout to prevent json-server from crashing
        await new Promise((resolve) => setTimeout(resolve, 500));
      }

      toastActions.addToast({
        id: Date.now().toString(),
        message:
          selectedFavorites.length > 1
            ? 'Favorecidos deletados com sucessos'
            : 'Favorecido deletado com sucesso',
        type: 'success',
      });

      await fetchData();
      loaderActions.setIsLoading(false);
    } catch (error) {
      toastActions.addToast({
        id: Date.now().toString(),
        message: 'Erro ao deletar favorecido.',
        type: 'error',
      });

      console.error('Error deleting selected items:', error);
      fetchData();
      loaderActions.setIsLoading(false);
    }
  };

  const filterList = useCallback(() => {
    if (filter === '') return setFilteredData(data);

    const filtered = data.filter((favorite) => {
      const { name, tax_id, branch, account } = favorite || {};
      const filterText = filter.toLowerCase();

      return (
        name?.toLowerCase().includes(filterText) ||
        tax_id?.includes(filterText) ||
        branch?.includes(filterText) ||
        account?.includes(filterText)
      );
    });
    setFilteredData(filtered);
  }, [data, filter]);

  useEffect(() => {
    if (!modalState.isOpen) {
      fetchData();
    }
  }, [modalState.isOpen]);

  useEffect(() => {
    filterList();
  }, [filter, filterList]);

  return (
    <>
      <Header
        label="Seus Favorecidos"
        onAddFav={() => navigate('/novo')}
        onChangeFilter={(filter) => setFilter(filter)}
      ></Header>

      {isLoading && <Loader />}
      <List listData={filteredData} onDeleteSelected={handleDeleteSelected} />
    </>
  );
};

export default Favorites;
