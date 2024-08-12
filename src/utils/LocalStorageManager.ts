import { ArtItem } from '@/types/name';

class LocalStorageManager {
  private readonly keyName: string;
  constructor() {
    this.keyName = 'favorites';
  }

  getFavorites() {
    return JSON.parse(localStorage.getItem(this.keyName) || '[]');
  }

  putFavorites(item: ArtItem): { favorites: ArtItem[] } {
    let favorites = this.getFavorites();
    if (!this.isFavoriteItem(item)) {
      favorites.push(item);
    } else {
      favorites = favorites.filter((storedItem: ArtItem) => storedItem.id !== item.id);
    }

    localStorage.setItem(this.keyName, JSON.stringify(favorites));
    return { favorites };
  }

  isFavoriteItem(item: ArtItem) {
    const items = JSON.parse(localStorage.getItem(this.keyName) || '[]');
    return !!items.find((storedItem: ArtItem) => storedItem.id == item.id);
  }
}
export const localStorageManager = new LocalStorageManager();
