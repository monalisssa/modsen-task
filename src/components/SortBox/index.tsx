import { FC, useState } from 'react';
import './style.css';
import { sortItems } from '../../helpers/sortFunction';
import { SortBoxProps } from '../../types/name';

const SortBox: FC<SortBoxProps> = ({ items, setItems }) => {
  const [sortType, setSortType] = useState({ title: 'asc', artist: 'desc' });

  const handleSortItems = (field: string, currentType: string) => {
    const newType = currentType === 'asc' ? 'desc' : 'asc';
    setItems(sortItems(items, field, newType));
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
