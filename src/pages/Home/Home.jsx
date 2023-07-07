import React, { useEffect, useState } from 'react';
import TrendingMovies from 'pages/TrendingMovies/TrendingMovies';
import { fetchTrendingMovies } from 'api/api';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingList = () => {
      try {
        setLoading(true);
        if (movies.length < 20) {
          fetchTrendingMovies().then(trendingMovies => {
            setMovies(trendingMovies);
          });
        }
        console.log(movies);
      } catch {
        console.log('error');
        alert('An error occurred while fetching the movies.');
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingList();
  }, [movies]);

  return (
    <main>
      <h1>Trending today</h1>
      <TrendingMovies movies={movies} />
      {loading && <Loader />}
    </main>
  );
};

export default Home;
