import { useNavigate } from 'react-router-dom';
import React from 'react';

const useCardClick = (handleFavoriteUpdate: (item: any) => void) => {
  const navigate = useNavigate();

  return (event: React.MouseEvent<HTMLDivElement>, item: any) => {
    if (
      event.target instanceof HTMLButtonElement ||
      (event.target as HTMLElement).closest('button')
    ) {
      event.stopPropagation();
      handleFavoriteUpdate(item);
    } else {
      navigate(`/details/${item.id}`);
    }
  };
};

export default useCardClick;
