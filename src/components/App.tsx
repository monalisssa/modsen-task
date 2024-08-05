import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import '../constants/styles/theme.css';
import '../global.css';
import ArtItemsProvider from '../context/ArtItemsProvider';
import Details from '../pages/Details';

const App: React.FC = () => {
  return (
    <ArtItemsProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </ArtItemsProvider>
  );
};

export default App;
