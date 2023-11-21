import { FC, useEffect, useState } from 'react';
import { Badge, Checkbox, Listing, Table } from '@components';
import s from './List.style.module.scss';
import { ColorsType } from '@components/types/Colors';
import { Receiver, statusColorMap } from '../../types/api.type';
import { modalActions } from '../../store/modal/modal.actions';

type ListProps = {
  listData: Receiver[];
  onDeleteSelected: (selectedFavorites: Receiver[]) => void;
};

const List: FC<ListProps> = ({ listData, onDeleteSelected }) => {
  const [selectedFavorites, setSelectedFavorites] = useState<Receiver[]>([]);
  const [disableDelBtn, setDisableDelBtn] = useState(true);

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

  const openModal = async (item: Receiver) => {
    if (item.status === 'rascunho') {
      const Draft = await import('../DraftModalContent/DraftModalContent');
      modalActions.openModal(Draft.default, { favorite: item });
    }

    if (item.status === 'validado') {
      const Validated = await import(
        '../ValidatedModalContent/ValidatedModalContent'
      );
      modalActions.openModal(Validated.default, { favorite: item });
    }
  };

  useEffect(() => {
    if (selectedFavorites.length > 0) {
      setDisableDelBtn(false);
    } else {
      setDisableDelBtn(true);
    }
  }, [selectedFavorites]);

  return (
    <Listing
      onDeleteSelected={() => onDeleteSelected(selectedFavorites)}
      disableBtn={disableDelBtn}
    >
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
                <span className={s.name} onClick={() => openModal(item)}>
                  {item.name}
                </span>
              </td>
              <td>{item.tax_id}</td>
              <td>{item.bank_name}</td>
              <td>{item.bank_code}</td>
              <td>{item.account}</td>
              <td style={{ width: '188px' }} onClick={() => openModal(item)}>
                <Badge
                  variant={statusColorMap[item.status] as ColorsType}
                  status={item.status}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Listing>
  );
};

export default List;
