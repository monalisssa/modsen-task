import { memo, useEffect, useState } from 'react';
import FavoriteCard from '../FavoriteCard';
import Loader from '../UI/Loader';
import useFetch from '../../hooks/useFetch';
import { fetchArtItems } from '../../api/fetchItems';
import { ArtItem } from '../../types/name';
import { useFavorites } from '../../hooks/useFavorites';

const ExtraCardsList = () => {
  const [extraItems, setExtraItems] = useState<ArtItem[]>([]);
  const [loading, items] = useFetch(() => fetchArtItems('new', 9), []);
  const { updateFavorites, isFavorite } = useFavorites();

  useEffect(() => {
    if (items) {
      setExtraItems(items);
    }
  }, [items]);

  const handleFavoriteUpdate = (item: ArtItem) => {
    updateFavorites(item);
  };

  return (
    <div className="content-box">
      <div className="title">
        <p className="title-small">Here some more</p>
        <h4 className="title-large">Other works for you</h4>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="favorites-list">
          {extraItems.map((item: ArtItem) => (
            <FavoriteCard
              item={item}
              key={item.id}
              handleFavoriteUpdate={handleFavoriteUpdate}
              isFavorite={isFavorite(item)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(ExtraCardsList);
