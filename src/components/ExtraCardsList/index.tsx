import React from 'react';
import FavoriteCard from '../FavoriteCard';
import { ExtraCardsListInterface } from './types';

const ExtraCardsList: React.FC<ExtraCardsListInterface> = ({ artItems }) => {
  return (
    <div className="content-box">
      <div className="title">
        <p className="title-small">Here some more</p>
        <h4 className="title-large">Other works for you</h4>
      </div>
      <div className="favorites-list">
        {artItems.map((item: any) => (
          <FavoriteCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ExtraCardsList;
