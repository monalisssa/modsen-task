import { ArtItem } from '../types/name';

export const addToFavorites = (item: ArtItem) => {
  const items = JSON.parse(localStorage.getItem('items') || '[]');
  if (!items.find((storedItem: ArtItem) => storedItem.id === item.id)) {
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
  }
};

export const getFavorites = () => {
  return JSON.parse(localStorage.getItem('items') || '[]');
};

export const removeFromFavorites = (id: number) => {
  const items = JSON.parse(localStorage.getItem('items') || '[]');
  const new_items = items.filter((removingItem: ArtItem) => removingItem.id !== id);
  localStorage.setItem('items', JSON.stringify(new_items));
};

export const isFavoriteItem = (id: number) => {
  const items = JSON.parse(localStorage.getItem('items') || '[]');
  return !!items.find((storedItem: ArtItem) => storedItem.id === id);
};
