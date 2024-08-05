export const fetchArtItems = async (searchTerm?: string) => {
  let url = '';
  if (searchTerm)
    url = `https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}&fields=id,title,artist_title,dimensions,credit_line,date_display,is_public_domain,image_id`;
  else
    url = `https://api.artic.edu/api/v1/artworks?fields=id,title,artist_title,dimensions,credit_line,date_display,is_public_domain,image_id&limit=23`;
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
  const response = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
  const data = await response.json();
  data.data.image = await fetchArtItemImage(data.data.image_id);
  return data.data;
};

export const fetchArtItemImage = async (id: number) => {
  const response = await fetch(`https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`);
  if (!response.ok) {
    return null;
  }
  return response.url;
};
