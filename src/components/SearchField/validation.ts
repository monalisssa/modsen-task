import * as yup from 'yup';

export const searchSchema = yup.object().shape({
  searchTerm: yup
    .string()
    .matches(/.{3,}/, {
      excludeEmptyString: true,
      message: 'Must be 3 characters',
    })
    .matches(/^[a-zA-Z\s]*$/, 'Only English letters and spaces'),
});
