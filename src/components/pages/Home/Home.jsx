import { useEffect, useState } from 'react';
import MovieList from '../MovieList/MovieList.jsx'
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


  return <MovieList movieArr = {movies} error = {error}/>
};
export default Home;
