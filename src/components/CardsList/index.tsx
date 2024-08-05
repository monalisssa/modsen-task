import React from 'react';
import Card from '../Card';
import './style.css';
import Loader from '../UI/Loader';
import { CardsListInterface } from './types';

const CardsList: React.FC<CardsListInterface> = ({ loading, artItems }) => {
  return (
    <div className="content-box">
      <div className="title">
        <p className="title-small">Topics for you</p>
        <h4 className="title-large">Our special gallery</h4>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="cards-container">
          <div className="cards-list">
            {artItems.map((item: any) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default CardsList;
