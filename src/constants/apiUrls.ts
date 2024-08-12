export const API_ENDPOINT = 'https://api.artic.edu/api/v1';
export const ARTWORK_SEARCH_ENDPOINT = `${API_ENDPOINT}/artworks/search`;
export const ARTWORK_ENDPOINT = `${API_ENDPOINT}/artworks`;
export const ARTWORK_IMAGE_ENDPOINT = (imageId: number) =>
  `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
export const ARTWORK_QUERY_PARAMS =
  'fields=id,title,artist_title,dimensions,credit_line,date_display,is_public_domain,image_id&limit';
