import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../../services/movies.js';
import grid from './grid.css';
const Home = () => {
  const [elements, setMovies] = useState([]);

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

  const el = elements.map(photo => (
    <li key={photo.message} width="480" controls>
      <img
        src={`https://image.tmdb.org/t/p/original${photo.poster_path}`}
        claseName={grid.img}
        alt={photo.title}
      />
      <a href={photo.homepage} className={grid.reference}>
        {photo.title}
      </a>
    </li>
  ));
  return <div claseName={grid.box}>{error || el}</div>;
};
export default Home;
