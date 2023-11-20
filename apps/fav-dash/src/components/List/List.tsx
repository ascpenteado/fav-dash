import { FC, Suspense, useState } from 'react';
import { Badge, Checkbox, Listing, Table } from '@components';
import s from './List.style.module.scss';
import { ColorsType } from '@components/types/Colors';
import { Receiver } from '../../types/api.type';

type StatusColorMap = Record<string, string>;

const statusColorMap: StatusColorMap = {
  rascunho: 'neutral-color-dark',
  validado: 'success-color',
};

type ListProps = {
  listData: Receiver[];
  onDeleteSelected: (selectedFavorites: Receiver[]) => void;
};

const Loading = () => {
  return <p>carregando...</p>;
};

const List: FC<ListProps> = ({ listData, onDeleteSelected }) => {
  const [selectedFavorites, setSelectedFavorites] = useState<Receiver[]>([]);

  const selectAll = () => {
    const allSelected = selectedFavorites.length === listData.length;

    allSelected
      ? setSelectedFavorites([])
      : setSelectedFavorites([...listData]);
  };

  const selectOne = (item: Receiver) => {
    const isSelected = selectedFavorites.some(
      (selectedItem) => selectedItem.id === item.id,
    );

    if (isSelected) {
      const updatedSelection = selectedFavorites.filter(
        (selectedItem) => selectedItem.id !== item.id,
      );
      setSelectedFavorites(updatedSelection);
    } else {
      setSelectedFavorites([...selectedFavorites, item]);
    }
  };

  return (
    <Listing onDeleteSelected={() => onDeleteSelected(selectedFavorites)}>
      <Suspense fallback={<Loading />}>
        <Table>
          <thead>
            <tr>
              <th className={s.checkWrapper}>
                <Checkbox
                  checked={selectedFavorites.length === listData.length}
                  onChange={selectAll}
                />
                Favorecido
              </th>
              <th>CPF</th>
              <th>Banco</th>
              <th>Agência</th>
              <th>CC</th>
              <th>Status do Favorecido</th>
            </tr>
          </thead>
          <tbody>
            {listData?.map((item) => (
              <tr key={item.id}>
                <td className={s.checkWrapper}>
                  <Checkbox
                    checked={selectedFavorites.includes(item)}
                    onChange={() => selectOne(item)}
                  />
                  <span className={s.name} onClick={() => console.log(item)}>
                    {item.name}
                  </span>
                </td>
                <td>{item.tax_id}</td>
                <td>{item.bank_name}</td>
                <td>{item.bank_code}</td>
                <td>{item.account}</td>
                <td style={{ width: '188px' }}>
                  <Badge
                    variant={statusColorMap[item.status] as ColorsType}
                    status={item.status}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Suspense>
    </Listing>
  );
};

export default List;
