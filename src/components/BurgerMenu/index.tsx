import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';
import home from '../../assets/images/home.svg';
import favorites from '../../assets/images/favorites.svg';
import { BurgerMenuProps } from './types';

const BurgerMenu: React.FC<BurgerMenuProps> = ({ closeMenu }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <div className="menu">
      <ul className="menu__links">
        {!isHomePage && (
          <Link className="logo" to={'/'} onClick={handleLinkClick}>
            <img src={home} alt="home" />
            Home
          </Link>
        )}
        <Link className="logo" to={'/favorites'} onClick={handleLinkClick}>
          <img src={favorites} alt="favorites" />
          Your favorites
        </Link>
      </ul>
    </div>
  );
};

export default BurgerMenu;
