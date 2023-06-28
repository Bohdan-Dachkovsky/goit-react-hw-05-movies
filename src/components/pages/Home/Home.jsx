import { useEffect, useState } from 'react';
import MovieList from './MovieList.jsx'
import { getTrendingMovies } from '../../../services/movies.js';


const Home = () => {
  const [movies, setMovies] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    getTrendingMovies()
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(error => {
        setError(error);
        console.log(error.message);
      });
  }, []);


    return <>
    {error && <p>{error.message}</p>}
  { movies.length > 0 && <MovieList movieArr = {movies}/>}
  </>;
};
export default Home;
