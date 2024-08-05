import { ArtItem } from '../../types/name';

export interface CardsListInterface {
  loading: boolean;
  artItems: ArtItem[];
  setArtItems: (newArtItems: ArtItem[]) => void;
}
