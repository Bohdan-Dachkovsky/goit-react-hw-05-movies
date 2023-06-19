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


  return error || <MovieList movieArr = {movies}/>
};
export default Home;
