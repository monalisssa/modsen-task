import { localStorageManager } from '@utils/LocalStorageManager';
import { useState } from 'react';
import { ArtItem } from '@/types/name';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<ArtItem[]>(localStorageManager.getFavorites());
  const [loading, setLoading] = useState(true);

  const isFavorite = (item: ArtItem) => {
    return localStorageManager.isFavoriteItem(item);
  };

  const updateFavorites = (item: ArtItem) => {
    const { favorites } = localStorageManager.putFavorites(item);
    setFavorites(favorites);
    updateLoading();
  };

  const updateLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return { favorites, isFavorite, updateFavorites, loading, setLoading };
};
