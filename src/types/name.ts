export interface ArtItem {
  id: number;
  title: string;
  artist_title: string;
  place_of_origin?: string;
  dimensions?: string;
  credit_line?: string;
  date_display?: string;
  is_public_domain?: boolean;
  image?: string;
}

export interface CardProps {
  item: ArtItem;
  handleFavoriteUpdate?: (item: ArtItem) => void;
  isFavorite: boolean;
}

export interface CardsListProps {
  artItems: ArtItem[];
  setArtItems: (newArtItems: ArtItem[]) => void;
  loading: boolean;
}

export interface PaginationProps {
  numbers: number[];
  prevPage: () => void;
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  goToPage: (page: number) => void;
}

export interface SortBoxProps {
  handleSortItems: (field: string, newType: 'asc' | 'desc') => void;
}
