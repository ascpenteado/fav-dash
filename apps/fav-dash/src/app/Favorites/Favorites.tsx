import { Header } from '@components';
import List from '../../components/List/List';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const [data, setData] = useState<unknown>();
  const [error, setError] = useState<string>('');

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await api.get('/receivers');
      setData(response);
    } catch (err) {
      setError('Error fetching data');
      console.error('Error fetching data:', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      <Header
        label="Seus Favorecidos"
        onAddFav={() => navigate('/novo')}
      ></Header>

      <List listData={data} />
    </>
  );
};

export default Favorites;
