import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { addMovie } from '../../../services/movies.js';
const MoviesPage = () => {
  let { movieId } = useParams();

  const [movie, setMovie] = useState([]);

  // Profile(movieId);
  useEffect(() => {
    addMovie(movieId)
      .then(data => {
        setMovie(data);
        console.log(data);
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }, [movieId]);
  let movies = (
    <ol key={movie.id}>
      <li key={movie.original_title}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt={movie.title}
          srcSet={`https://image.tmdb.org/t/p/w500${movie.backdrop_path} 2x`}
        />
        <p>&nbsp;&nbsp;&nbsp;&nbsp;{movie.overview}</p>
      </li>
    </ol>
  );

  return <div>{movies}</div>;
};
export default MoviesPage;
