import './style.css';
import { useNavigate } from 'react-router-dom';
import CardDescription from '../CardDescription';
import { imageIcons } from '../../constants/imageIcons';
import { ROUTES } from '../../constants/routes';
import { CardProps } from '../../types/name';
import React, { FC } from 'react';

const Card: FC<CardProps> = ({ item, handleFavoriteUpdate, isFavorite }) => {
  const navigate = useNavigate();
  const handleNavigateToDetails = () => {
    navigate(ROUTES.DETAILS.replace(':id', item.id.toString()));
  };

  const handleClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    handleFavoriteUpdate(item);
  };
  return (
    <div className="card" onClick={handleNavigateToDetails}>
      {item.image ? <img src={item.image} alt="art" /> : <img src={imageIcons.default} alt="art" />}
      <div className="card__content">
        <CardDescription item={item} />
        <button
          className={`card__button ${isFavorite ? 'active' : ''}`}
          onClick={handleClickButton}
        >
          <img src={imageIcons.favorites} alt="favorites" />
        </button>
      </div>
    </div>
  );
};

export default Card;
