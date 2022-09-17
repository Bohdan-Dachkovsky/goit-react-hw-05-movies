import { useParams, Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovie } from '../../../services/movies.js';
import detailsStyle from './details.module.css';
const MovieDetails = () => {
  let { movieId } = useParams();

  const [movie, addMovie] = useState([]);

  // Profile(movieId);
  useEffect(() => {
    getMovie(movieId)
      .then(data => {
        addMovie(data);
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }, [movieId]);
  let movies = (
    <ol key={movie.original_title}>
      <li className={detailsStyle.items} key={movie.original_title}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          srcSet={`https://image.tmdb.org/t/p/w500${movie.poster_path} 2x`}
        />
        <p className={detailsStyle.text}>
          &nbsp;&nbsp;&nbsp;&nbsp;{movie.overview}
        </p>
      </li>
    </ol>
  );
  let actorsObj = (
    <Link key={movieId} to="cast">
      Cast
    </Link>
  );
  return (
    <div className={detailsStyle.boxD}>
      {movies}
      <div>{actorsObj}</div>

      <Outlet />
    </div>
  );
};
export default MovieDetails;
