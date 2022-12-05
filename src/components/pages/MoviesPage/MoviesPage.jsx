import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { addMovie } from '../../../services/movies.js';
const MoviesPage = () => {
  let { movieId } = useParams();

  const [movies, setMovie] = useState([]);
  console.log(movies.id);
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
  let newMovie = (
    <ol key={movies.id}>
      <li>
        <h1>{movies.original_title}</h1>
        <p>{movies.overview}</p>
      </li>
      <li>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`}
          alt={movies.title}
          srcSet={`https://image.tmdb.org/t/p/w500${movies.backdrop_path} 2x`}
        />
      </li>
    </ol>
  );

  return <div>{newMovie}</div>;
};
export default MoviesPage;
