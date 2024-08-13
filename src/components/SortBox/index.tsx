import { FC, memo, useState } from 'react';
import './style.css';
import { SortBoxProps } from '@/types/name';

const SortBox: FC<SortBoxProps> = ({ handleSortItems }) => {
  const [sortType, setSortType] = useState({ title: 'asc', artist: 'desc' });

  const handleClickSortItems = (field: string, currentType: string) => {
    const newType = currentType === 'asc' ? 'desc' : 'asc';
    handleSortItems(field, newType);
    setSortType({ ...sortType, [field]: newType });
  };

  return (
    <div className="sort-box">
      <p className="sort-box__title">Sort By</p>
      <ul className="sort-box__list">
        <li>
          Title
          <button
            onClick={() => handleClickSortItems('title', sortType.title)}
            className="sort-box__button"
          >
            {sortType.title === 'asc' ? '▲' : '▼'}
          </button>
        </li>
        <li>
          Artist
          <button
            onClick={() => handleClickSortItems('artist', sortType.artist)}
            className="sort-box__button"
          >
            {sortType.artist === 'asc' ? '▲' : '▼'}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default memo(SortBox);
