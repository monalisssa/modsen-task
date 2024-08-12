import { memo, useEffect, useState } from 'react';
import './style.css';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { searchSchema } from './validation';
import useDebounce from '@hooks/useDebounce';
import { imageIcons } from '@constants/imageIcons';

const SearchField = ({ changeSearchTerm }: { changeSearchTerm: (searchTerm: string) => void }) => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchTerm = useDebounce(searchValue, 1000);

  const { control, trigger, getValues, formState } = useForm({
    mode: 'onChange',
    resolver: yupResolver(searchSchema),
  });
  useEffect(() => {
    changeSearchTerm(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const onSearchChange = async () => {
    const isValid = await trigger('searchTerm');
    if (isValid) {
      setSearchValue(getValues('searchTerm'));
    }
  };
  return (
    <div className="search-wrapper">
      <div className="main__title">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Let's Find Some <span>Art</span> Here!
      </div>
      <form className="search-box">
        <Controller
          control={control}
          name="searchTerm"
          render={({ field }) => (
            <input
              className="search-input"
              placeholder="Search art, artist, work..."
              {...field}
              onChange={async (e) => {
                field.onChange(e.target.value);
                await onSearchChange();
              }}
            />
          )}
        />
        <button type="submit">
          <img src={imageIcons.search} alt="search" />
        </button>
      </form>
      <p className="search-input__errors">
        {formState.errors.searchTerm?.message && formState.errors.searchTerm.message}
      </p>
    </div>
  );
};

export default memo(SearchField);
