import React from 'react';
import Header from '../../components/Header';
import FavoriteCardsList from '../../components/FavoriteCardsList';
import Footer from '../../components/Footer';
const Favorites = () => {
  return (
    <>
      <Header />
      <main>
        <FavoriteCardsList />
      </main>
      <Footer />
    </>
  );
};

export default Favorites;
