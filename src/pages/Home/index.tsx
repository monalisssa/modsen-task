import React, { useContext, useEffect } from 'react';
import CardsList from '../../components/CardsList';
import { fetchArtItems } from '../../api/fetchItems';
import { ArtItem } from '../../types/name';
import { ArtItemsContext } from '../../context/ArtItemsProvider';
const Home = () => {
  const { artItems, setArtItems, loading, setLoading } = useContext(ArtItemsContext);

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
        {artItems && (
          <>
            <CardsList loading={loading} artItems={artItems} setArtItems={setArtItems} />
          </>
        )}
      </main>
    </>
  );
};

export default Home;
