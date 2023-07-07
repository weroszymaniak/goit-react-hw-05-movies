import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInput = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(query);
    console.log(query);
  };

  return (
    <form className={css.searchbar} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        name="query"
        autoFocus
        value={query}
        onChange={handleInput}
      ></input>
      <button className={css.button} type="submit">
        Search
      </button>
    </form>
  );
};

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
export default Searchbar;
