import React from 'react';
import { useState } from 'react';
import Loader from 'components/Loader/Loader';
import TrendingMovies from 'pages/TrendingMovies/TrendingMovies';
import Searchbar from 'components/Searchbar/Searchbar';
import { fetchQuery } from 'api/api';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [missingMovie, setMissingMovie] = useState(false);

  const onSearching = query => {
    try {
      setLoading(true);
      fetchQuery(query).then(result => {
        setSearchedMovies(result);
        setMissingMovie(result.length === 0);
      });
    } catch {
      console.log('error');
    } finally {
      setLoading(false);
      console.log(searchedMovies, 'thats it');
    }
  };

  return (
    <div>
      <Searchbar onSearch={onSearching} />

      {loading && <Loader />}

      {missingMovie && (
        <p>There is no movies with this request. Please, try again</p>
      )}

      {searchedMovies && <TrendingMovies movies={searchedMovies} />}
    </div>
  );
};

export default Movies;
