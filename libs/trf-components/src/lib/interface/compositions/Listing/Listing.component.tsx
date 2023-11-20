import { FC, ReactNode } from 'react';
import Button from '../../../elements/Button/Button.component';
import s from './Listing.style.module.scss';

type ListingProps = {
  children?: ReactNode;
  onDeleteSelected: () => void;
};

const Listing: FC<ListingProps> = ({ onDeleteSelected, children }) => {
  return (
    <div className={s.container}>
      <Button variant="danger-color-lighter" onClick={onDeleteSelected}>
        Excluir selecionados
      </Button>

      <div className={s.tableWrapper}>{children}</div>
    </div>
  );
};

export default Listing;
