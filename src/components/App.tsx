import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Favorites from '../pages/Favorites';
import '../constants/styles/theme.css';
import '../global.css';
import ArtItemsProvider from '../context/ArtItemsProvider';
import NavProvider from '../context/NavProvider';

const App: React.FC = () => {
  return (
    <ArtItemsProvider>
      <NavProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </NavProvider>
    </ArtItemsProvider>
  );
};

export default App;
