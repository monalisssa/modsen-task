import React, { useContext, useRef } from 'react';
import logo from '../../assets/images/logo.svg';
import favorites from '../../assets/images/favorites.svg';
import { Link, useLocation } from 'react-router-dom';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import home from '../../assets/images/home.svg';
import menu from '../../assets/images/menu.svg';
import './style.css';
import { MenuContext } from '../../context/NavProvider';
import BurgerMenu from '../BurgerMenu';

const Header: React.FC = () => {
  const location = useLocation();
  const node = useRef<HTMLDivElement>(null);
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const handleOpenBurgerMenu = () => {
    toggleMenuMode();
  };

  const isHomePage = location.pathname === '/';

  useOnClickOutside(node, () => {
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <header ref={node}>
      <div className="header__content">
        <div className="logo">
          <img src={logo} alt="logo" />
          Museum of <span>Art</span>
        </div>

        <div className="nav-links">
          {!isHomePage && (
            <Link className="logo" to={'/'}>
              <img src={home} alt="home" />
              Home
            </Link>
          )}
          <Link className="logo" to={'/favorites'}>
            <img src={favorites} alt="favorites" />
            Your favorites
          </Link>
        </div>
        <button className="burger-menu__button" onClick={handleOpenBurgerMenu}>
          <img src={menu} alt="burger menu" />
        </button>

        {isMenuOpen && <BurgerMenu closeMenu={handleOpenBurgerMenu} />}
      </div>
    </header>
  );
};

export default Header;
