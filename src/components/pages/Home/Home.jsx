import { useEffect, useState } from 'react';
import { getMovies } from '../../../services/movies.js';
const Home = () => {
  const [elements, setMovies] = useState([]);
  useEffect(() => {
    getMovies().then(setMovies);
  }, []);
  const el = elements.map(photo => (
    <img
      src={`https://image.tmdb.org/t/p/original/${photo.backdrop_path}`}
      alt={photo.ganres.name}
    />
  ));
  return (
    <div>
      <li> {el}</li>
    </div>
  );
};
export default Home;
