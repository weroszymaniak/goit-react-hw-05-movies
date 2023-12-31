import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'api/api';
import Loader from 'components/Loader/Loader';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const onCastList = () => {
      try {
        setLoading(true);

        fetchCast(id).then(cast => {
          setCast(cast);
        });
        console.log(fetchCast(id));
      } catch {
        console.log('error');
      } finally {
        setLoading(false);
      }
    };
    onCastList();
  }, [id]);

  return (
    <div>
      {loading && <Loader />}
      <ul className={css.list}>
        {cast.map(({ id, profile_path, original_name, name, character }) => (
          <li key={id} className={css.item}>
            <img
              className={css.img}
              width="200px"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `https://placehold.co/200x300?text=Photo+not+available`
              }
              alt={original_name}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
