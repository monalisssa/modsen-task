import { useState } from 'react';

const usePagination = (totalItems: any, itemsPerPage: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isPageChanging, setIsPageChanging] = useState(false);
  const totalPages = Math.min(10, Math.ceil(totalItems / itemsPerPage));

  console.log(totalPages);

  const changePage = (page: number) => {
    setIsPageChanging(true);
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    setTimeout(() => {
      setIsPageChanging(false);
    }, 500); // Пример задержки в 1 секунду для демонстрации
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
    isPageChanging,
    resetPagination,
  };
};

export default usePagination;
