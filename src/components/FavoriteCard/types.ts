import { ArtItem } from '../../types/name';

export interface FavoriteCardInterface {
  item: ArtItem;
  handleFavoriteUpdate?: (item: ArtItem) => void;
  isFavorite: boolean;
}
