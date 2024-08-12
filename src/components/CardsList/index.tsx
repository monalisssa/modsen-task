import Card from '../Card';
import './style.css';
import Loader from '../UI/Loader';
import usePagination from '../../hooks/usePagination';
import SortBox from '../SortBox';
import { ArtItem, CardsListProps } from '../../types/name';
import { useFavorites } from '../../hooks/useFavorites';
import Pagination from '../Pagination';

const CardsList: React.FC<CardsListProps> = ({ artItems, setArtItems, loading }) => {
  const { updateFavorites, isFavorite } = useFavorites();
  const {
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
    getPageItems,
    pageLoading,
    numbers,
  } = usePagination(artItems.length);

  const paginatedItems = getPageItems(artItems);

  const updateArtItems = (updatedItems: ArtItem[]) => {
    setArtItems(updatedItems);
    goToPage(1);
  };

  const handleFavoriteUpdate = (item: ArtItem) => {
    updateFavorites(item);
  };

  return (
    <div className="content-box">
      <div className="title">
        <p className="title-small">Topics for you</p>
        <h4 className="title-large">Our special gallery</h4>
      </div>
      <div className="cards-container">
        {loading ? (
          <Loader />
        ) : (
          <>
            {artItems.length > 0 ? (
              <>
                <div className="cards-container__cards-box">
                  <SortBox items={artItems} setItems={updateArtItems} />
                  <div className="cards-list">
                    {pageLoading ? (
                      <Loader />
                    ) : (
                      paginatedItems.map((item: ArtItem) => (
                        <Card
                          item={item}
                          key={item.id}
                          handleFavoriteUpdate={handleFavoriteUpdate}
                          isFavorite={isFavorite(item)}
                        />
                      ))
                    )}
                  </div>
                </div>
                <Pagination
                  numbers={numbers}
                  prevPage={prevPage}
                  currentPage={currentPage}
                  totalPages={totalPages}
                  nextPage={nextPage}
                  goToPage={goToPage}
                />
              </>
            ) : (
              <p>No art items found.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CardsList;
