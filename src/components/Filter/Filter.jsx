import { FilterField, FilterLabel } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filteredContact } from '../../redux/contactSlice';
import { useState } from 'react';
export const Filter = () => {
  const [filterValue, setFilterValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    setFilterValue(event.target.value);
    dispatch(filteredContact(event.target.value));
  };

  return (
    <FilterField>
      <FilterLabel>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filterValue}
          onChange={handleChange}
        />
      </FilterLabel>
    </FilterField>
  );
};