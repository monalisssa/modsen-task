import { memo, useContext, useRef } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import './style.css';
import { MenuContext } from '../../context/NavProvider';
import NavLinks from '../NavLinks';
import { imageIcons } from '../../constants/imageIcons';

const Header = () => {
  const node = useRef<HTMLDivElement>(null);
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const handleOpenBurgerMenu = () => {
    toggleMenuMode();
  };

  useOnClickOutside(node, () => {
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
    <header ref={node}>
      <div className="header__content">
        <div className="logo">
          <img src={imageIcons.logo} alt="logo" />
          Museum of <span>Art</span>
        </div>

        <NavLinks />
        <button className="burger-menu__button" onClick={handleOpenBurgerMenu}>
          <img src={imageIcons.menu} alt="burger menu" />
        </button>
        <div className="burger-menu">
          <NavLinks onLinkClick={handleOpenBurgerMenu} />
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
