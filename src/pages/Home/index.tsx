import React, { useContext, useEffect, useMemo, useState } from 'react';
import CardsList from '../../components/CardsList';
import ExtraCardsList from '../../components/ExtraCardsList';
import SearchField from '../../components/SearchField';
import { fetchArtItems } from '../../api/fetchItems';
import { ArtItem } from '../../types/name';
import { sortItems } from '../../helpers/sortItems/sortFunction';
import { ArtItemsContext } from '../../context/ArtItemsProvider';
import Loader from '../../components/UI/Loader';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Home = () => {
  const { artItems, setArtItems, loading, setLoading } = useContext(ArtItemsContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchItems, setSearchItems] = useState([]);

  const extraItems = useMemo(() => {
    return artItems.slice(-9); // Получаем последние 9 элементов из artItems
  }, [artItems]);

  useEffect(() => {
    if (searchTerm) {
      setLoading(true);
      fetchArtItems(searchTerm).then((data: ArtItem[]) => {
        setLoading(false);
        setSearchItems(sortItems(data, 'title'));
      });
    }
  }, [searchTerm]);

  useEffect(() => {
    setLoading(true);
    fetchArtItems().then((data: ArtItem[]) => {
      setLoading(false);
      setArtItems(data);
      setSearchItems(data);
    });
  }, []);

  const handleChangeSearchValue = (q: string) => {
    setSearchTerm(q);
  };

  return (
    <>
      <Header />
      <main>
        <SearchField handleChangeSearchTerm={handleChangeSearchValue} />
        {loading ? (
          <Loader />
        ) : (
          <>
            <CardsList artItems={searchItems} setArtItems={setArtItems} />
            <ExtraCardsList artItems={extraItems} />
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Home;
