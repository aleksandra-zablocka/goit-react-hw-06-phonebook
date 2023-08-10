import css from './Favorites.module.css';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/actions';

const Favorites = () => {
  const dispatch = useDispatch();
  const handleChangeFilter = status => {
    dispatch(setStatusFilter(status));
  };

  return (
    <div className={css.filters}>
      <button
        onClick={() => handleChangeFilter('all')}
        className={css.filterBtn}
      >
        All
      </button>
      <button
        onClick={() => handleChangeFilter('favorite')}
        className={css.filterBtn}
      >
        Favorites
      </button>
    </div>
  );
};

export default Favorites;
