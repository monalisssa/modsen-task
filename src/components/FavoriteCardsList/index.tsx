import './style.css';
import { ArtItem } from '@/types/name';
import Loader from '@components/UI/Loader';
import FavoriteCard from '@components/FavoriteCard';
import { useFavorites } from '@hooks/useFavorites';
import { useTimer } from '@hooks/useTimer';
import { imageIcons } from '@constants/imageIcons';
const FavoriteCardsList = () => {
  const { favorites, loading, updateFavorites, isFavorite, setLoading } = useFavorites();
  const handleFavoriteUpdate = (item: ArtItem) => {
    updateFavorites(item);
  };

  useTimer(() => setLoading(false), 500);
  return (
    <>
      <div className="main__title">
        Here Are Your
        <div className="favorites__title">
          <img src={imageIcons.favorites} alt="favorires" />
          <span>Favorites</span>
        </div>
      </div>
      <div className="content-box">
        <div className="title">
          <p className="title-small">Saved by you</p>
          <h4 className="title-large">Your favorites list</h4>
        </div>
        {loading ? (
          <Loader />
        ) : favorites.length !== 0 ? (
          <div className="favorites-list">
            {favorites.map((item: ArtItem) => (
              <FavoriteCard
                item={item}
                key={item.id}
                handleFavoriteUpdate={handleFavoriteUpdate}
                isFavorite={isFavorite(item)}
              />
            ))}
          </div>
        ) : (
          <h3 className="favorites-list--empty">Favorites List is empty!</h3>
        )}
      </div>
    </>
  );
};

export default FavoriteCardsList;
