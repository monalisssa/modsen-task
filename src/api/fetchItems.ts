import {
  ARTWORK_ENDPOINT,
  ARTWORK_IMAGE_ENDPOINT,
  ARTWORK_QUERY_PARAMS,
  ARTWORK_SEARCH_ENDPOINT,
} from '../constants/apiUrls';

export const fetchArtItems = async (searchTerm?: string, limit: number = 14) => {
  let url = '';
  if (searchTerm)
    url = `${ARTWORK_SEARCH_ENDPOINT}?q=${searchTerm}&${ARTWORK_QUERY_PARAMS}=${limit}`;
  else url = `${ARTWORK_ENDPOINT}?${ARTWORK_QUERY_PARAMS}=${limit}`;
  const response = await fetch(url);
  const data = await response.json();

  return await Promise.all(
    data.data.map(async (item: any) => {
      item.image = await fetchArtItemImage(item.image_id);
      return item;
    }),
  );
};

export const searchArtItemById = async (id: string) => {
  const response = await fetch(`${ARTWORK_ENDPOINT}/${id}`);
  const data = await response.json();
  data.data.image = await fetchArtItemImage(data.data.image_id);
  return data.data;
};

export const fetchArtItemImage = async (id: number) => {
  const response = await fetch(ARTWORK_IMAGE_ENDPOINT(id));
  if (!response.ok) {
    return null;
  }
  return response.url;
};
