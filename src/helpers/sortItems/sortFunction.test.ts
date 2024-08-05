import { sortItems } from './sortFunction';
import { ArtItem } from '../../types/name';

describe('sortItems', () => {
  const mockArtItems: ArtItem[] = [
    {
      id: 1,
      title: 'Mona Lisa',
      artist_title: 'Leonardo da Vinci',
    },
    {
      id: 2,
      title: 'The Starry Night',
      artist_title: 'Vincent van Gogh',
    },
    {
      id: 3,
      title: 'The Scream',
      artist_title: 'Edvard Munch',
    },
    {
      id: 4,
      title: 'Girl with a Pearl Earring',
      artist_title: 'Johannes Vermeer',
    },
    {
      id: 5,
      title: 'The Kiss',
      artist_title: null,
    },
  ];

  test('should sort items by title in ascending order', () => {
    const sortedItems = sortItems(mockArtItems, 'title', 'asc');
    expect(sortedItems.map((item: ArtItem) => item.title)).toEqual([
      'Girl with a Pearl Earring',
      'Mona Lisa',
      'The Kiss',
      'The Scream',
      'The Starry Night',
    ]);
  });

  test('should sort items by title in descending order', () => {
    const sortedItems = sortItems(mockArtItems, 'title', 'desc');
    expect(sortedItems.map((item: ArtItem) => item.title)).toEqual([
      'The Starry Night',
      'The Scream',
      'The Kiss',
      'Mona Lisa',
      'Girl with a Pearl Earring',
    ]);
  });

  test('should sort items by artist in ascending order', () => {
    const sortedItems = sortItems(mockArtItems, 'artist', 'asc');
    expect(sortedItems.map((item: ArtItem) => item.artist_title || 'unknown')).toEqual([
      'Edvard Munch',
      'Johannes Vermeer',
      'Leonardo da Vinci',
      'unknown',
      'Vincent van Gogh',
    ]);
  });

  test('should sort items by artist in descending order', () => {
    const sortedItems = sortItems(mockArtItems, 'artist', 'desc');
    expect(sortedItems.map((item: ArtItem) => item.artist_title || 'unknown')).toEqual([
      'Vincent van Gogh',
      'unknown',
      'Leonardo da Vinci',
      'Johannes Vermeer',
      'Edvard Munch',
    ]);
  });

  test('should return the original array if the sort type is unknown', () => {
    const sortedItems = sortItems(mockArtItems, 'unknown', 'asc');
    expect(sortedItems).toEqual(mockArtItems);
  });
});
