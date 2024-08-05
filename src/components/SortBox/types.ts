import { ArtItem } from '../../types/name';

export interface SortBoxInterface {
  items: ArtItem[];
  setItems: (artItems: ArtItem[]) => void;
}
