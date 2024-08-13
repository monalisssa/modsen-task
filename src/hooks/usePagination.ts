import { useMemo, useState } from 'react';

const usePagination = (totalItems: number, itemsPerPage: number = 2) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLoading, setPageLoading] = useState(false);
  const totalPages = Math.min(10, Math.ceil(totalItems / itemsPerPage));

  const numbers = useMemo(
    () =>
      Array.from(
        { length: Math.min(Math.ceil(totalItems / itemsPerPage), 7) },
        (_, index) => index + 1,
      ),
    [totalItems, itemsPerPage],
  );

  const changePage = (page: number) => {
    setPageLoading(true);
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    setTimeout(() => {
      setPageLoading(false);
    }, 500);
  };

  const nextPage = () => {
    changePage(currentPage + 1);
  };

  const prevPage = () => {
    changePage(currentPage - 1);
  };

  const goToPage = (page: number) => {
    changePage(page);
  };

  const resetPagination = () => {
    setCurrentPage(1);
  };

  const getPageItems = (items: any) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  return {
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
    getPageItems,
    pageLoading,
    resetPagination,
    numbers,
  };
};

export default usePagination;
