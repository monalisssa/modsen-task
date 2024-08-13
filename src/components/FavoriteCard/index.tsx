import './style.css';
import CardDescription from '@components/CardDescription';
import { imageIcons } from '@constants/imageIcons';
import { CardProps } from '@/types/name';
import React, { FC, memo } from 'react';
import useCardClick from '@hooks/useCardClick';

const FavoriteCard: FC<CardProps> = ({ item, handleFavoriteUpdate, isFavorite }) => {
  const handleCardClick = useCardClick(handleFavoriteUpdate);
  return (
    <div className="favorite-card" onClick={(event) => handleCardClick(event, item)}>
      <div className="favorite-card__content">
        {item.image ? (
          <img src={item.image} alt="art" />
        ) : (
          <img src={imageIcons.default} alt="art" />
        )}
        <CardDescription item={item} />
      </div>
      <button className={`card__button ${isFavorite ? 'active' : ''}`}>
        <img src={imageIcons.favorites} alt="favorites" />
      </button>
    </div>
  );
};

export default memo(FavoriteCard);
