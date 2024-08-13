import './style.css';
import { ArtItem } from '@/types/name';
import { useFavorites } from '@hooks/useFavorites';
import { imageIcons } from '@constants/imageIcons';
import { memo } from 'react';

const CardDetails = ({ item }: { item: ArtItem }) => {
  const { isFavorite, updateFavorites } = useFavorites();

  const handleClickButton = () => {
    updateFavorites(item);
  };

  return (
    <div className="content-box">
      <div className="card-info">
        <div className="image-box">
          {item.image ? (
            <img src={item.image} alt="art" />
          ) : (
            <img src={imageIcons.default} alt="art" />
          )}
          <button
            className={`card__button ${isFavorite(item) ? 'active' : ''}`}
            onClick={handleClickButton}
          >
            <img src={imageIcons.favorites} alt="favorites" />
          </button>
        </div>
        <div className="card-info__description">
          <div className="main-description">
            <p className="description__title">{item.title}</p>
            <div className="artist-info">
              <span>{item.artist_title}</span>
              <p>{item.date_display}</p>
            </div>
          </div>

          <div className="extra-description">
            <p className="description__title">Overview</p>
            <ul className="description__list">
              <li>
                <span>Artist nationality: </span>
                {item.place_of_origin}
              </li>
              <li>
                <span>Dimensions: </span>
                {item.dimensions}
              </li>
              <li>
                <span>Credit Line: </span>
                {item.credit_line},{item.date_display}
              </li>
              <li>
                <span>Repository: </span>
                Metropolitan Museum of Art, New York, NY
              </li>
            </ul>
            {item.is_public_domain ? 'Public' : 'Private'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CardDetails);
