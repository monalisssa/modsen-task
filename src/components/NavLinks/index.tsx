import { Link, useLocation } from 'react-router-dom';
import './style.css';
import { imageIcons } from '@constants/imageIcons';
import { memo } from 'react';

const NavigationLinks = ({ onLinkClick }: { onLinkClick?: () => void }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <div className="nav-links">
      {!isHomePage && (
        <Link className="logo" to={'/'} onClick={onLinkClick}>
          <img src={imageIcons.home} alt="home" />
          Home
        </Link>
      )}
      <Link className="logo" to={'/favorites'} onClick={onLinkClick}>
        <img src={imageIcons.favorites} alt="favorites" />
        Your favorites
      </Link>
    </div>
  );
};

export default memo(NavigationLinks);
