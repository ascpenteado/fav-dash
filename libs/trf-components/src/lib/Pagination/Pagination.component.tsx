import { FC } from 'react';
import s from './Pagination.style.module.scss';
import Icon from '../Icon/Icon.component';
import arrow from '../../assets/svg/smaller-than.svg';

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  return (
    <div className={s.pagination}>
      <button
        className={s.paginationButton}
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        <Icon iconUrl={arrow} />
      </button>
      {pageNumbers.map((pageNumber) => (
        <span
          key={pageNumber}
          className={`${s.paginationNumber} ${
            pageNumber === currentPage ? s.paginationNumberActive : ''
          }`}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </span>
      ))}
      <button
        className={`${s.paginationButton} ${s.paginationNext}`}
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        <Icon iconUrl={arrow} />
      </button>
    </div>
  );
};

export default Pagination;
