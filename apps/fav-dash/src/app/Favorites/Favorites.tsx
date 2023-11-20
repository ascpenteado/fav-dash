import { Header } from '@components';
import List from '../../components/List/List';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { toastActions } from '../../store/toast/toast.actions';

const Favorites = () => {
  const [data, setData] = useState<unknown>();

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await api.get('/receivers');
      setData(response);
    } catch (err) {
      toastActions.addToast({
        id: Date.now(),
        message: 'Erro ao conectar com a API',
        type: 'error',
      });
      console.error('Error fetching data:', err);
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

      <List listData={data} />
    </>
  );
};

export default Favorites;
