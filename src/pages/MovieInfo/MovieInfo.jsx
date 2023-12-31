import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMoveDetails } from 'api/api';
import Loader from 'components/Loader/Loader';
import css from './MovieInfo.module.css';

const MovieInfo = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onFetchingDetails = () => {
      try {
        setLoading(true);

        fetchMoveDetails(id).then(details => {
          setMovieInfo(details);
        });
      } catch {
        console.log('error');
      } finally {
        setLoading(false);
      }
    };
    onFetchingDetails();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (!movieInfo) {
    return null;
  }

  const {
    poster_path,
    original_title,
    title,
    release_date,
    popularity,
    overview,
    genres,
  } = movieInfo;

  return (
    <div className={css.movieinfo}>
      <Link to={location.state?.from ?? '/'}>
        <button className={css.button} type="button">
          Go back
        </button>
      </Link>
      <img
        className={css.img}
        width="300px"
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : `https://placehold.co/300x450?text=Photo+not+available`
        }
        alt={original_title}
      />
      <div>
        <h1>
          {title} ({release_date?.slice(0, 4)})
        </h1>
        <p>User score: {popularity}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <ul className={css.list}>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul className={css.additional}>
          <li className={css.item}>
            <Link to={`cast`} className={css.link}>
              Cast
            </Link>
          </li>
          <li className={css.item}>
            <Link to={`reviews`} className={css.link}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};
export default MovieInfo;
