import {
  addToFavorites,
  getFavorites,
  removeFromFavorites,
  isFavoriteItem,
} from './favoritesFunctions';
import { ArtItem } from '../../types/name';

describe('favorites functions', () => {
  const mockArtItem: ArtItem = {
    id: 1,
    title: 'Test Art Item',
    artist_title: 'Test Artist',
  };

  beforeEach(() => {
    localStorage.clear();
  });

  describe('addToFavorites', () => {
    it('should add a new item to the favorites', () => {
      addToFavorites(mockArtItem);
      const favorites = getFavorites();
      expect(favorites).toEqual([mockArtItem]);
    });

    it('should not add a duplicate item to the favorites', () => {
      addToFavorites(mockArtItem);
      addToFavorites(mockArtItem);
      const favorites = getFavorites();
      expect(favorites).toEqual([mockArtItem]);
    });
  });

  describe('getFavorites', () => {
    it('should return an empty array if no favorites are stored', () => {
      const favorites = getFavorites();
      expect(favorites).toEqual([]);
    });

    it('should return the stored favorites', () => {
      addToFavorites(mockArtItem);
      const favorites = getFavorites();
      expect(favorites).toEqual([mockArtItem]);
    });
  });

  describe('removeFromFavorites', () => {
    it('should remove the specified item from the favorites', () => {
      addToFavorites(mockArtItem);
      removeFromFavorites(mockArtItem.id);
      const favorites = getFavorites();
      expect(favorites).toEqual([]);
    });

    it('should not remove any items if the specified item is not found', () => {
      addToFavorites(mockArtItem);
      removeFromFavorites(999);
      const favorites = getFavorites();
      expect(favorites).toEqual([mockArtItem]);
    });
  });

  describe('isFavoriteItem', () => {
    it('should return true if the item is in the favorites', () => {
      addToFavorites(mockArtItem);
      const isFavorite = isFavoriteItem(mockArtItem.id);
      expect(isFavorite).toBe(true);
    });

    it('should return false if the item is not in the favorites', () => {
      const isFavorite = isFavoriteItem(mockArtItem.id);
      expect(isFavorite).toBe(false);
    });
  });
});
