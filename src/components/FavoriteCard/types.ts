import { ArtItem } from '../../types/name';

export interface FavoriteCardInterface {
  item: ArtItem;
  updateFavorites?: () => void;
}
