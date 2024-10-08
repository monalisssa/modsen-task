import { ArtItem } from '@/types/name';
import './style.css';

const CardDescription = ({ item }: { item: ArtItem }) => {
  return (
    <div className="card__description">
      <div>
        <h3 className="card__title">
          {item.title.length > 15 ? `${item.title.substring(0, 15)}...` : item.title}
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
  );
};

export default CardDescription;
