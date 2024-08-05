import React, { useEffect, useState } from 'react';
import './style.css';
import search from '../../assets/images/search.svg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SearchFieldProps, searchSchema } from './types';
import useDebounce from '../../hooks/useDebounce';

const SearchField: React.FC<SearchFieldProps> = ({ handleChangeSearchTerm }) => {
  const onSubmit = (values: any) => console.log(values);
  const [searchValue, setSearchValue] = useState('');
  const { register, handleSubmit, watch, formState } = useForm({
    mode: 'onChange',
    resolver: yupResolver(searchSchema),
  });
  const debouncedSearchTerm = useDebounce(searchValue, 1000);

  const searchTerm = watch('searchTerm');

  const isValid = formState.isValid;
  useEffect(() => {
    if (isValid) setSearchValue(searchTerm);
  }, [formState]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      handleChangeSearchTerm(searchValue);
    }
  }, [debouncedSearchTerm]);
  return (
    <div className="search-wrapper">
      <div className="main__title">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Let's Find Some <span>Art</span> Here!
      </div>
      <form className="search-box" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="search-input"
          placeholder="Search art, artist, work..."
          {...register('searchTerm')}
        />
        <img src={search} alt={search} />
      </form>
      <p className="search-input__errors">
        {formState.errors.searchTerm && formState.errors.searchTerm.message}
      </p>
    </div>
  );
};

export default SearchField;
