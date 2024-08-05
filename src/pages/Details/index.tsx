import React, { useContext, useEffect, useState } from 'react';
import CardDetails from '../../components/CardDetails';
import { useParams } from 'react-router-dom';
import { ArtItem } from '../../types/name';
import { ArtItemsContext } from '../../context/ArtItemsProvider';
import { searchArtItemById } from '../../api/fetchItems';
import Loader from '../../components/UI/Loader';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Details = () => {
  const { artItems, setLoading, loading } = useContext(ArtItemsContext);
  const { id = '' } = useParams();
  const [currentItem, setCurrentItem] = useState<ArtItem>(null);

  useEffect(() => {
    setLoading(true);
    searchArtItemById(id).then((data: ArtItem) => {
      setLoading(false);
      setCurrentItem(data);
    });
  }, [artItems, id]);
  return (
    <>
      <Header />
      <main>{loading ? <Loader /> : <>{currentItem && <CardDetails item={currentItem} />}</>}</main>
      <Footer />
    </>
  );
};

export default Details;
