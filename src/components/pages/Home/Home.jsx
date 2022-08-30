import { useEffect, useState } from 'react';
import { getMovies } from '../../../services/movies.js';
const Home = () => {
  const [elements, setMovies] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    getMovies()
      .then(({ data }) => {
        setMovies(data);
      })
      .catch(error => {
        setError(error);
        console.log(error.message);
      });
  }, []);
  const el = elements.map(photo => (
    <img
      src={`https://image.tmdb.org/t/p/original/${photo.backdrop_path}`}
      alt={photo.ganres.name}
    />
  ));
  return (
    <div>
      <li> {error || el}</li>
    </div>
  );
};
export default Home;
