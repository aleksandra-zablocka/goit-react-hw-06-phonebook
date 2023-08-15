import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/actions';
import css from './Filter.module.css';

const Filter = () => {
const filter = useSelector(state => state.filter);
const dispatch = useDispatch();

  const handleChange = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  return (
    <div className={css.filter}>
      <input
        className={css.inputFilter}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        placeholder="Search for contacts"
      />
    </div>
  );
};

export default Filter;
