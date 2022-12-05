import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { addMovie } from '../../../services/movies.js';
import size from './search.module.css';
const MoviesPage = () => {
  let { movieId } = useParams();

  const [movies, setMovie] = useState([]);

  // Profile(movieId);
  useEffect(() => {
    addMovie(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }, [movieId]);
  let newMovie = (
    <ol key={movies.id} className={size.thisMovie}>
      <li>
        <h1>{movies.original_title}</h1>
      </li>
      <li>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`}
          alt={movies.title}
          srcSet={`https://image.tmdb.org/t/p/w500${movies.backdrop_path} 2x`}
        />
        <h2 className={size.description}>{movies.overview}</h2>
      </li>
    </ol>
  );

  return <div>{newMovie}</div>;
};
export default MoviesPage;
