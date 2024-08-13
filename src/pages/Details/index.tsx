import { useEffect, useState } from 'react';
import CardDetails from '@components/CardDetails';
import { useParams } from 'react-router-dom';
import { ArtItem } from '@/types/name';
import { searchArtItemById } from '@api/fetchItems';
import Loader from '@components/UI/Loader';
import Header from '@components/Header';
import Footer from '@components/Footer';
import useFetch from '@hooks/useFetch';

const Details = () => {
  const { id = '' } = useParams();
  const [currentItem, setCurrentItem] = useState<ArtItem>(null);
  const [loading, item] = useFetch(() => searchArtItemById(id), [id]);

  useEffect(() => {
    if (item) {
      setCurrentItem(item);
    }
  }, [item]);

  return (
    <>
      <Header />
      <main>{loading ? <Loader /> : <>{currentItem && <CardDetails item={currentItem} />}</>}</main>
      <Footer />
    </>
  );
};

export default Details;
