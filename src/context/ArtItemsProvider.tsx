import React, { createContext, ReactNode, useState } from 'react';
import { ArtItem } from '../types/name';

interface ArtItemsContextType {
  artItems: ArtItem[];
  setArtItems: (items: ArtItem[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const ArtItemsContext = createContext<ArtItemsContextType>({
  artItems: [],
  setArtItems: () => {},
  loading: false,
  setLoading: () => {},
});

interface ArtItemsProviderProps {
  children: ReactNode;
}

const ArtItemsProvider = ({ children }: ArtItemsProviderProps) => {
  const [artItems, setArtItems] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Инициализация с состоянием загрузки

  return (
    <ArtItemsContext.Provider
      value={{
        artItems,
        setArtItems,
        loading,
        setLoading,
      }}
    >
      {children}
    </ArtItemsContext.Provider>
  );
};

export default ArtItemsProvider;
