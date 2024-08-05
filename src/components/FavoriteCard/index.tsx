import React, { useState } from 'react';
import favorites from '../../assets/images/favorites.svg';
import './style.css';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  addToFavorites,
  isFavoriteItem,
  removeFromFavorites,
} from '../../helpers/favoritesFunctions/favoritesFunctions';
import { FavoriteCardInterface } from './types';
import default_image from '../../assets/images/default.svg';

const FavoriteCard: React.FC<FavoriteCardInterface> = ({ item, updateFavorites }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigateToDetails = () => {
    navigate(`/details/${item.id}`);
  };
  const path = location.pathname;
  const [isFavorite, setIsFavorite] = useState(isFavoriteItem(item.id));
  const handleClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (isFavorite) {
      removeFromFavorites(item.id);
      setIsFavorite(false);
      if (path === '/favorites') updateFavorites();
    } else {
      addToFavorites(item);
      setIsFavorite(true);
    }
  };
  return (
    <div className="favorite-card" onClick={handleNavigateToDetails}>
      <div className="favorite-card__content">
        {item.image ? <img src={item.image} alt="art" /> : <img src={default_image} alt="art" />}
        <div className="card__description">
          <div>
            <h3 className="card__title">
              {item.title.length > 20 ? `${item.title.substring(0, 20)}...` : item.title}
            </h3>
            {item.artist_title ? (
              <p className="card__artist">
                {item.artist_title.length > 20
                  ? `${item.artist_title.substring(0, 20)}...`
                  : item.artist_title}
              </p>
            ) : (
              <p className="card__artist">Unknown</p>
            )}
          </div>
          <span className="card__status">Public</span>
        </div>
      </div>
      <button className={`card__button ${isFavorite ? 'active' : ''}`} onClick={handleClickButton}>
        <img src={favorites} alt="favorites" />
      </button>
    </div>
  );
};

export default FavoriteCard;
