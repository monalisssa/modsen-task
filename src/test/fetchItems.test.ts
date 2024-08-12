import { searchArtItemById } from '../api/fetchItems';

test('Valid data', async () => {
  const artItem = await searchArtItemById('136999');
  expect(artItem.title).toBe('Girandoles');
  expect(artItem.artist_title).toBe('Isaac F. Baker');
});
