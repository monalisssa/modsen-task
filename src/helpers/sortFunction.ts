import { ArtItem } from '@/types/name';

export const sortItems = (items: ArtItem[], type: string, order: 'asc' | 'desc' = 'asc') => {
  const compare = (a: string, b: string, order: 'asc' | 'desc') => {
    const comparison = a.toLowerCase().localeCompare(b.toLowerCase());
    return order === 'asc' ? comparison : -comparison;
  };
  switch (type) {
    case 'title':
      return items.sort((a, b) => compare(a.title, b.title, order));
    case 'artist':
      return items.sort((a, b) => {
        const artistA = a.artist_title === null ? 'unknown' : a.artist_title || '';
        const artistB = b.artist_title === null ? 'unknown' : b.artist_title || '';
        return compare(artistA, artistB, order);
      });
    default:
      return items;
  }
};
