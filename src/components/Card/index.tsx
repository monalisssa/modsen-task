import './style.css';
import CardDescription from '@components/CardDescription';
import { imageIcons } from '@constants/imageIcons';
import { CardProps } from '@/types/name';
import React, { FC, memo } from 'react';
import useCardClick from '@hooks/useCardClick';

const Card: FC<CardProps> = ({ item, handleFavoriteUpdate, isFavorite }) => {
  const handleCardClick = useCardClick(handleFavoriteUpdate);
  return (
    <div className="card" onClick={(event) => handleCardClick(event, item)}>
      {item.image ? <img src={item.image} alt="art" /> : <img src={imageIcons.default} alt="art" />}
      <div className="card__content">
        <CardDescription item={item} />
        <button className={`card__button ${isFavorite ? 'active' : ''}`}>
          <img src={imageIcons.favorites} alt="favorites" />
        </button>
      </div>
    </div>
  );
};

export default memo(Card);
