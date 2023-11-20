import { FC, ReactNode } from 'react';
import s from './Table.style.module.scss';

type TableProps = {
  children?: ReactNode;
};

const Table: FC<TableProps> = ({ children }) => {
  return <table className={s.table}>{children}</table>;
};

export default Table;
