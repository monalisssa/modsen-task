import './style.css';
import { useNavigate } from 'react-router-dom';
import CardDescription from '../CardDescription';
import { imageIcons } from '../../constants/imageIcons';
import { ROUTES } from '../../constants/routes';
import { CardProps } from '../../types/name';

const FavoriteCard: React.FC<CardProps> = ({ item, handleFavoriteUpdate, isFavorite }) => {
  const navigate = useNavigate();
  const handleNavigateToDetails = () => {
    navigate(ROUTES.DETAILS.replace(':id', item.id.toString()));
  };
  const handleClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    handleFavoriteUpdate(item);
  };
  return (
    <div className="favorite-card" onClick={handleNavigateToDetails}>
      <div className="favorite-card__content">
        {item.image ? (
          <img src={item.image} alt="art" />
        ) : (
          <img src={imageIcons.default} alt="art" />
        )}
        <CardDescription item={item} />
      </div>
      <button className={`card__button ${isFavorite ? 'active' : ''}`} onClick={handleClickButton}>
        <img src={imageIcons.favorites} alt="favorites" />
      </button>
    </div>
  );
};

export default FavoriteCard;
