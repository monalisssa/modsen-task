import { ArtItem } from '../types/name';
import { localStorageManager } from '../utils/LocalStorageManager';

describe('LocalStorageManager', () => {
  afterEach(() => {
    // Clear the localStorage before each test
    localStorage.clear();
  });

  describe('getFavorites', () => {
    it('should return an empty array if no favorites are stored', () => {
      expect(localStorageManager.getFavorites()).toEqual([]);
    });

    it('should return the stored favorites', () => {
      const item1: ArtItem = { id: 1, title: 'Item 1', artist_title: 'Item 1 artist' };
      const item2: ArtItem = { id: 2, title: 'Item 2', artist_title: 'Item 2 artist' };

      localStorageManager.putFavorites(item1);
      localStorageManager.putFavorites(item2);

      expect(localStorageManager.getFavorites()).toEqual([item1, item2]);
    });
  });

  describe('putFavorites', () => {
    it('should add a new item to the favorites', () => {
      const item: ArtItem = { id: 1, title: 'Item 1', artist_title: 'Item 1 artist' };
      const { favorites } = localStorageManager.putFavorites(item);

      expect(favorites).toEqual([item]);
    });

    it('should remove an existing item from the favorites', () => {
      const item1: ArtItem = { id: 1, title: 'Item 1', artist_title: 'Item 1 artist' };

      localStorageManager.putFavorites(item1);
      const { favorites } = localStorageManager.putFavorites(item1);

      expect(favorites).toEqual([]);
    });
  });

  describe('isFavoriteItem', () => {
    it('should return true if the item is in the favorites', () => {
      const item: ArtItem = { id: 1, title: 'Item 1', artist_title: 'Item 1 artist' };
      localStorageManager.putFavorites(item);

      expect(localStorageManager.isFavoriteItem(item)).toBe(true);
    });

    it('should return false if the item is not in the favorites', () => {
      const item1: ArtItem = { id: 1, title: 'Item 1', artist_title: 'Item 1 artist' };
      const item2: ArtItem = { id: 2, title: 'Item 2', artist_title: 'Item 2 artist' };
      localStorageManager.putFavorites(item1);

      expect(localStorageManager.isFavoriteItem(item2)).toBe(false);
    });
  });
});
