import { PaginationProps } from '../../types/name';
import { FC } from 'react';

const Pagination: FC<PaginationProps> = ({
  numbers,
  prevPage,
  currentPage,
  goToPage,
  totalPages,
  nextPage,
}) => {
  return (
    <div className="cards-container__pages-box">
      <button onClick={prevPage} disabled={currentPage === 1} className="pagination__arrow">
        &#8249;
      </button>
      {numbers.map((number) => (
        <button
          key={number}
          className={number !== currentPage ? 'pagination__button' : 'pagination__button active'}
          onClick={() => goToPage(number)}
        >
          {number}
        </button>
      ))}
      <button
        onClick={nextPage}
        disabled={currentPage === totalPages}
        className="pagination__arrow"
      >
        &#8250;
      </button>
    </div>
  );
};

export default Pagination;
