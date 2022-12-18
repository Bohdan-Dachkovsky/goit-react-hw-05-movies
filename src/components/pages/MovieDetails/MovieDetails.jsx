import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovie } from '../../../services/movies.js';
import detailsStyle from './details.module.css';
const MovieDetails = () => {
  const navigate = useNavigate();
  let { movieId } = useParams();

  const [movie, addMovie] = useState([]);

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
    <ol key={movie.id}>
      <li className={detailsStyle.items} key={movie.original_title}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt={movie.title}
          srcSet={`https://image.tmdb.org/t/p/w500${movie.backdrop_path} 2x`}
          className={detailsStyle.picture}
        />
        <p className={detailsStyle.text}>
          &nbsp;&nbsp;&nbsp;&nbsp;{movie.overview}
        </p>
      </li>
    </ol>
  );
  let actorsObj = (
    <Link key={movieId} to={`cast`}>
      Cast
    </Link>
  );
  let reviewsObj = (
    <Link key={movieId} to={`reviews`}>
      Reviews
    </Link>
  );
  return (
    <div className={detailsStyle.boxD}>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go back
      </button>
      {movies}
      <div>{actorsObj}</div>
      <div>{reviewsObj}</div>
      <Outlet />
    </div>
  );
};
export default MovieDetails;
