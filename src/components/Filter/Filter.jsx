import css from './Filter.module.css';

const Filter = ({onFilterChange, filter}) => {

   const handleChange = event => {
    const {value} = event.target;
    onFilterChange(value);
  }

  return (
    <div className={css.filter}>
    <label htmlFor='filter'>Please type a name</label>
    <input
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