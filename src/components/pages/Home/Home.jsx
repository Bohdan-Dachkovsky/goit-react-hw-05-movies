import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../src/services/movies.js';
import grid from './grid.module.css';
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

  const renderFilms = movies.map(({ id, title }) => (
    <Link key={id} to={`movies/${id}`}>
      {title}
    </Link>
  ));
  return <div className={grid.box}>{error || renderFilms}</div>;
};
export default Home;
