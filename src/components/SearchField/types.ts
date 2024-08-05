import * as yup from 'yup';

export interface SearchFieldProps {
  handleChangeSearchTerm: (searchTerm: string) => void;
}

export const searchSchema = yup.object().shape({
  searchTerm: yup
    .string()
    .min(3, 'Search term must be at least 3 characters long')
    .matches(/^[a-zA-Z\s]*$/, 'Search term should contain only English letters and spaces'),
});
