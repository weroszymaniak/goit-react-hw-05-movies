import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  //   zmiana w stanie przy zmianie w value inputu
  const handleInput = e => {
    setQuery(e.target.value);
  };
  //po submicie funkcja onSearch
  const handleSubmit = e => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form>
      <input
        type="text"
        name="query"
        autoFocus
        value={query}
        onChange={handleInput}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};
export default Searchbar;
