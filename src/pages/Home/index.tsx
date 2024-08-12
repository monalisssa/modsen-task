import { useCallback, useEffect, useState } from 'react';
import CardsList from '@components/CardsList';
import ExtraCardsList from '@components/ExtraCardsList';
import SearchField from '@components/SearchField';
import { fetchArtItems } from '@api/fetchItems';
import { sortItems } from '@helpers/sortFunction';
import Header from '@components/Header';
import Footer from '@components/Footer';
import useFetch from '@hooks/useFetch';

const Home = () => {
  const [artItems, setArtItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, items] = useFetch(() => fetchArtItems(searchTerm), [searchTerm]);

  useEffect(() => {
    if (items) {
      setArtItems(sortItems(items, 'title'));
    }
  }, [items]);

  const handleChangeSearchValue = useCallback((q: string) => {
    setSearchTerm(q);
  }, []);

  return (
    <>
      <Header />
      <main>
        <SearchField changeSearchTerm={handleChangeSearchValue} />
        <CardsList artItems={artItems} setArtItems={setArtItems} loading={loading} />
        <ExtraCardsList />
      </main>
      <Footer />
    </>
  );
};

export default Home;
