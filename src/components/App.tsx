import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import '../constants/styles/theme.css';
import '../global.css';
import ArtItemsProvider from '../context/ArtItemsProvider';

const App: React.FC = () => {
  return (
    <ArtItemsProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ArtItemsProvider>
  );
};

export default App;
