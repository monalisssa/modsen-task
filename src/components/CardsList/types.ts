import { ArtItem } from '../../types/name';

export interface CardsListInterface {
  artItems: ArtItem[];
  setArtItems: (newArtItems: ArtItem[]) => void;
}
