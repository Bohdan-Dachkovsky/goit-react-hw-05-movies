import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovie } from '../../../services/movies.js';
import detailsStyle from './details.module.css';
const MoviesPage = () => {
  let { movieId } = useParams();

  const [movie, addMovie] = useState([]);

  // Profile(movieId);
  useEffect(() => {
    getMovie(movieId)
      .then(data => {
        addMovie(data);
        console.log(data);
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }, [movieId]);
  let movies = (
    <ol key={movie.id}>
      <li className={detailsStyle.items} key={movie.original_title}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt={movie.title}
          srcSet={`https://image.tmdb.org/t/p/w500${movie.backdrop_path} 2x`}
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
  let reviewsObj = (
    <Link key={movieId} to="reviews">
      Reviews
    </Link>
  );
  return (
    <div className={detailsStyle.boxD}>
      {movies}
      <div>{actorsObj}</div>
      <div>{reviewsObj}</div>
    </div>
  );
};
export default MoviesPage;
