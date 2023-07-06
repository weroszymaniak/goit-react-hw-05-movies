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
        fetchTrendingMovies().then(trendingMovies => {
          setMovies(trendingMovies);
        });
        console.log(movies);
      } catch {
        console.log('error');
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingList();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <TrendingMovies movies={movies} />
      {loading && <Loader />}
    </main>
  );
};

export default Home;
