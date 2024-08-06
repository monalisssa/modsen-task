import React, { useState } from 'react';
import './style.css';
import search from '../../assets/images/search.svg';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SearchFieldProps, searchSchema } from './types';

const SearchField: React.FC<SearchFieldProps> = ({ handleChangeSearchTerm }) => {
  const [canShowError, setCanShowError] = useState(true);
  const [isSearchDirty, setIsSearchDirty] = useState(false);
  const { control, handleSubmit, formState } = useForm({
    mode: 'onChange',
    resolver: yupResolver(searchSchema),
  });
  const { isSubmitting } = formState;

  const onSubmit = (values: any) => {
    handleChangeSearchTerm(values.searchTerm);
  };

  const onSearchChange = () => {
    if (!isSearchDirty && !formState.errors.searchTerm?.message) {
      setCanShowError(false);
    } else if (isSearchDirty && !canShowError) {
      setTimeout(() => setCanShowError(true), 2000);
    }

    if (!isSearchDirty) {
      setIsSearchDirty(true);
    }
  };
  return (
    <div className="search-wrapper">
      <div className="main__title">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Let's Find Some <span>Art</span> Here!
      </div>
      <form className="search-box" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="searchTerm"
          render={({ field }) => (
            <input
              className="search-input"
              placeholder="Search art, artist, work..."
              {...field}
              onChange={(e) => {
                field.onChange(e.target.value);
                onSearchChange();
              }}
            />
          )}
        />
        <button type="submit" disabled={isSubmitting}>
          <img src={search} alt={search} />
        </button>
      </form>
      <p className="search-input__errors">
        {formState.errors.searchTerm && canShowError && formState.errors.searchTerm.message}
      </p>
    </div>
  );
};

export default SearchField;
