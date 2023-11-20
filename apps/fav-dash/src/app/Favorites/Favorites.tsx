import { Header } from '@components';
import List from '../../components/List/List';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { toastActions } from '../../store/toast/toast.actions';
import { v4 as uuidv4 } from 'uuid';
import { Receiver } from '../../types/api.type';

const Favorites = () => {
  const [data, setData] = useState<Receiver[]>([]);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await api.get<Receiver[]>('/receivers', {
        _sort: 'created_at',
        _order: 'desc',
      });

      setData(response);
    } catch (err) {
      toastActions.addToast({
        id: uuidv4(),
        message: 'Erro ao conectar com a API',
        type: 'error',
      });
      console.error('Error fetching data:', err);
    }
  };

  const handleDeleteSelected = async (selectedFavorites: Receiver[]) => {
    try {
      for (const selectedItem of selectedFavorites) {
        await api.delete(`receivers/${selectedItem.id}`);

        // Added this timeout to prevent database crashing
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
    } catch (error) {
      toastActions.addToast({
        id: Date.now().toString(),
        message: 'Erro ao deletar favorecido.',
        type: 'error',
      });

      console.error('Error deleting selected items:', error);
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header
        label="Seus Favorecidos"
        onAddFav={() => navigate('/novo')}
      ></Header>

      <List listData={data} onDeleteSelected={handleDeleteSelected} />
    </>
  );
};

export default Favorites;
