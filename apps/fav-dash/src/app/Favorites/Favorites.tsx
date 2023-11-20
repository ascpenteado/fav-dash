import { Header } from '@components';
import List from '../../components/List';

const Favorites = () => {
  return (
    <>
      <Header
        label="Seus Favorecidos"
        onAddFav={() => console.log('oe')}
      ></Header>

      <List />
    </>
  );
};

export default Favorites;
