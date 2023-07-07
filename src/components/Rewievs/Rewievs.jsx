import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'api/api';
import Loader from 'components/Loader/Loader';
import css from './Rewievs.module.css';

const Rewievs = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [rewievs, setRewievs] = useState([]);

  useEffect(() => {
    const onRewievs = () => {
      try {
        setLoading(true);

        fetchReviews(id).then(reviews => {
          setRewievs(reviews);
        });
      } catch {
        console.log('error');
      } finally {
        setLoading(false);
      }
    };
    onRewievs();
  }, [id]);

  return (
    <div>
      {loading && <Loader />}
      {rewievs.length !== 0 && (
        <div>
          <ul>
            {rewievs.map(rewiev => (
              <li key={rewiev.id}>
                <p>Author: {rewiev.author}</p>
                <p>{rewiev.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {rewievs.length === 0 && <p>We don't have any reviews for this movie</p>}
    </div>
  );
};

export default Rewievs;
