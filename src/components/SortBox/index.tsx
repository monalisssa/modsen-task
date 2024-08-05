import React, { useState } from 'react';
import './style.css';
import { sortItems } from '../../helpers/sortFunction';
import { SortBoxInterface } from './types';

const SortBox: React.FC<SortBoxInterface> = ({ items, setItems }) => {
  const [sortType, setSortType] = useState({ title: 'asc', artist: 'desc' });

  const handleSortItems = (field: string, currentType: string) => {
    const newType = currentType === 'asc' ? 'desc' : 'asc';
    const sortedItems = sortItems(items, field, newType);
    console.log(sortedItems);
    setItems(sortedItems);
    setSortType({ ...sortType, [field]: newType });
  };

  return (
    <div className="sort-box">
      <p className="sort-box__title">Sort By</p>
      <ul className="sort-box__list">
        <li>
          Title
          <button
            onClick={() => handleSortItems('title', sortType.title)}
            className="sort-box__button"
          >
            {sortType.title === 'asc' ? '▲' : '▼'}
          </button>
        </li>
        <li>
          Artist
          <button
            onClick={() => handleSortItems('artist', sortType.artist)}
            className="sort-box__button"
          >
            {sortType.artist === 'asc' ? '▲' : '▼'}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SortBox;
