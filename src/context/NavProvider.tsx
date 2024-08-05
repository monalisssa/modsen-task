import React, { createContext, ReactNode, useState } from 'react';

interface MenuContextType {
  isMenuOpen: boolean;
  toggleMenuMode: () => void;
}

export const MenuContext = createContext<MenuContextType>({
  isMenuOpen: false,
  toggleMenuMode: () => {},
});

interface NavStateProps {
  children: ReactNode;
}

const NavProvider = ({ children }: NavStateProps) => {
  const [isMenuOpen, toggleMenu] = useState(false);

  const toggleMenuMode = () => {
    toggleMenu(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenuMode }}>{children}</MenuContext.Provider>
  );
};

export default NavProvider;
