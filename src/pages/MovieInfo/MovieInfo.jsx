import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMoveDetails } from 'api/api';
import Loader from 'components/Loader/Loader';

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
    <div>
      <Link to={location.state?.from ?? '/'}>
        <button type="button">Go back</button>
      </Link>
      <img
        width="300px"
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : `https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png`
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
        <ul>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to={`${id}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`${id}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};
export default MovieInfo;
