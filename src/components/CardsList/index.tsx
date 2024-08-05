import React, { useEffect, useMemo, useState } from 'react';
import Card from '../Card';
import './style.css';
import Loader from '../UI/Loader';
import { CardsListInterface } from './types';
import usePagination from '../../hooks/usePagination';

const CardsList: React.FC<CardsListInterface> = ({ loading, artItems }) => {
  const itemsPerPage = 2;
  const numbers = useMemo(
    () =>
      Array.from(
        { length: Math.min(Math.ceil(artItems.length / itemsPerPage), 7) },
        (_, index) => index + 1,
      ),
    [artItems.length, itemsPerPage],
  );
  const {
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
    getPageItems,
    isPageChanging,
    resetPagination,
  } = usePagination(artItems.length, itemsPerPage);

  const paginatedItems = getPageItems(artItems);
  const [activeButton, setActiveButton] = useState(1);

  const handleSetActiveButton = (number: number) => {
    goToPage(number);
    setActiveButton(number);
  };

  const handleNextPage = () => {
    nextPage();
    setActiveButton(currentPage + 1);
  };

  const handlePrevPage = () => {
    prevPage();
    setActiveButton(currentPage - 1);
  };

  useEffect(() => {
    resetPagination();
    setActiveButton(1);
  }, [artItems]);

  return (
    <div className="content-box">
      <div className="title">
        <p className="title-small">Topics for you</p>
        <h4 className="title-large">Our special gallery</h4>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="cards-container">
          <div className="cards-list">
            {isPageChanging ? (
              <Loader />
            ) : (
              paginatedItems.map((item: any) => <Card item={item} key={item.id} />)
            )}
          </div>

          <div className="pages-box">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="pagination__arrow"
            >
              &#8249;
            </button>
            {numbers.map((number) => (
              <button
                key={number}
                className={
                  activeButton !== number ? 'pagination__button' : 'pagination__button active'
                }
                onClick={() => handleSetActiveButton(number)}
              >
                {number}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="pagination__arrow"
            >
              &#8250;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default CardsList;
