import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux/es/exports';
import { filterContact } from 'redux/ContactSlice';
import { FileterInput, FilterLebel } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const findFilter = event => {
    const form = event.currentTarget;
    dispatch(filterContact(form.value));
  };
  return (
    <Formik>
      <FilterLebel htmlFor="Filter">
        <Field
          placeholder="Find contac by name"
          as={FileterInput}
          type="text"
          name="filter"
          onChange={findFilter}
        />
      </FilterLebel>
    </Formik>
  );
};
