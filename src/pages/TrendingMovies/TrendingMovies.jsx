import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './TrendingMovies.module.css';

const TrendingMovies = ({ movies }) => {
  // tworzy listę trending w home korzystając z obiektu movies z api

  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies &&
        movies.map(movie => (
          <li className={css.item} key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              className={css.link}
            >
              {movie.title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

TrendingMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default TrendingMovies;
