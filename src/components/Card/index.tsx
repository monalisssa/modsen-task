import React from 'react';
import './style.css';
import favorites from '../../assets/images/favorites.svg';

import { ArtItem } from '../../types/name';

const Card = ({ item }: { item: ArtItem }) => {
  return (
    <div className="card">
      <img src={item.image} alt="art" />
      <div className="card__content">
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
          <span className="card__status">{item.is_public_domain ? 'Public' : 'Private'}</span>
        </div>
        <button className={`card__button`}>
          <img src={favorites} alt="favorites" />
        </button>
      </div>
    </div>
  );
};

export default Card;
