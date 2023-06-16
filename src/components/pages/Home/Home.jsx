import { useEffect, useState } from 'react';
import {MovieList} from '../MovieList/MovieList.jsx'
import { getTrendingMovies } from '../../../services/movies.js';


const Home = () => {
  const [movies, setMovies] = useState([]);

  const [error, setError] = useState(null);
  // function ProfilePage() {
  //   // Get the userId param from the URL.
  //   let { userId } = useParams();
  //   // ...
  // }
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
