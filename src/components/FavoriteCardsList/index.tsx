import React, { useContext, useEffect, useState } from 'react';
import FavoriteCard from '../FavoriteCard';
import './style.css';
import favorites from '../../assets/images/favorites.svg';
import { getFavorites } from '../../helpers/favoritesFunctions';
import { ArtItem } from '../../types/name';
import { ArtItemsContext } from '../../context/ArtItemsProvider';
import Loader from '../UI/Loader';
const FavoriteCardsList = () => {
  const { loading, setLoading } = useContext(ArtItemsContext);
  const [favoriteItems, setFavoriteItems] = useState(getFavorites());
  const [isUpdate, setIsUpdate] = useState(false);

  const handleClickRemove = () => {
    setIsUpdate(true);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setFavoriteItems(getFavorites());
      setIsUpdate(false);
      setLoading(false);
    }, 500);
  }, [isUpdate]);

  return (
    <>
      <div className="main__title">
        Here Are Your
        <div className="favorites__title">
          <img src={favorites} />
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
        ) : (
          <>
            <div className="favorites-list">
              {favoriteItems.map((item: ArtItem) => (
                <FavoriteCard item={item} key={item.id} updateFavorites={handleClickRemove} />
              ))}
            </div>
            {favoriteItems.length === 0 && (
              <h3 className="favorites-list--empty">Favorites List is empty!</h3>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default FavoriteCardsList;
