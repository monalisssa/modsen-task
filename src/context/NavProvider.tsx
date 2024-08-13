import { createContext, ReactNode, useState } from 'react';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuMode = () => {
    setIsMenuOpen(!isMenuOpen);
    document.querySelector('.burger-menu')?.classList.toggle('show', !isMenuOpen);
    document.querySelector('.burger-menu')?.classList.toggle('hide', isMenuOpen);
    document.body?.classList.toggle('menu-open', !isMenuOpen);
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenuMode }}>{children}</MenuContext.Provider>
  );
};

export default NavProvider;
