import React, { useContext, useEffect, useMemo } from 'react';
import CardsList from '../../components/CardsList';
import ExtraCardsList from '../../components/ExtraCardsList';
import { fetchArtItems } from '../../api/fetchItems';
import { ArtItem } from '../../types/name';
import { ArtItemsContext } from '../../context/ArtItemsProvider';
import Loader from '../../components/UI/Loader';
const Home = () => {
  const { artItems, setArtItems, loading, setLoading } = useContext(ArtItemsContext);

  const extraItems = useMemo(() => {
    return artItems.slice(-9);
  }, [artItems]);

  useEffect(() => {
    setLoading(true);
    fetchArtItems().then((data: ArtItem[]) => {
      setLoading(false);
      setArtItems(data);
    });
  }, []);

  return (
    <>
      <main>
        {loading ? (
          <Loader />
        ) : (
          <>
            <CardsList artItems={artItems} setArtItems={setArtItems} />
            <ExtraCardsList artItems={extraItems} />
          </>
        )}
      </main>
    </>
  );
};

export default Home;
