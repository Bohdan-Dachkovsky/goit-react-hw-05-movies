import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../../services/movies.js';
const Home = () => {
  const [elements, setMovies] = useState([]);
  const [picture, setPicture] = useState([]);
  const [name, setName] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTrendingMovies()
      .then(({ results, backdrop_path, overview }) => {
        setMovies(results);
        setPicture(backdrop_path);
        setName(overview);
      })
      .catch(error => {
        setError(error);
        console.log(error.message);
      });
  }, []);

  console.log(elements);
  const el = elements.map(photo => (
    <li key={photo.message} width="480" controls>
      <img src={`https://image.tmdb.org/t/p/original${picture}`} alt={name} />
    </li>
  ));
  return (
    <div>
      <li> {error || el}</li>
    </div>
  );
};
export default Home;
