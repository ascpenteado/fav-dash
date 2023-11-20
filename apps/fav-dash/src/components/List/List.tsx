import { Badge, Checkbox, Listing, Table } from '@components';
import s from './List.style.module.scss';

import { ColorsType } from '@components/types/Colors';
import { FC, Suspense } from 'react';

type StatusColorMap = Record<string, string>;

const statusColorMap: StatusColorMap = {
  rascunho: 'neutral-color-dark',
  validado: 'success-color',
};

type ListProps = {
  listData: any[];
}

const Loading = () => {
  return (
    <p>carregando...</p>
  )
}

const List: FC<ListProps> = ({listData }) => {
  return (
    <Listing onDeleteSelected={() => console.log('e')}>
      <Suspense fallback={<Loading/>}>
      <Table>
        <thead>
          <tr>
            <th className={s.checkWrapper}>
              <Checkbox checked={false} onChange={() => console.log('oe')} />
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
                <Checkbox checked={false} onChange={() => console.log('oe')} />
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
