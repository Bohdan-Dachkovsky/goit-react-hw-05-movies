import { useParams, Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovie } from '../../../services/movies.js';
import detailsStyle from './details.module.css';
const MovieDetails = () => {
  const navigate = useNavigate();
  let { movieId } = useParams();
  const location = useLocation();
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
 
  return (
    <div className={detailsStyle.boxD}>
      <button
        onClick={() => {
          navigate('/', {replace: true, state: {previousURL:location.pathname}});
        }}
      >
        Go back
      </button>
        <ol key={movie.id}>
      <li className={detailsStyle.items} key={movie.original_title}>
        <img
          src={movie?.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`:
          `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRO2EQH7ghFziyXImIAd18XzoTR2TdoyExLSBo3wOtAKlgkk7f1gGOr591I6s9zxTbEs&amp;usqp=CAU` }
          alt={movie.title}
          srcSet={`https://image.tmdb.org/t/p/w500${movie.backdrop_path} 2x`}
          className={detailsStyle.picture}
        />
        <p className={detailsStyle.text}>
          &nbsp;&nbsp;&nbsp;&nbsp;{movie.overview}
        </p>
      </li>
    </ol>
      
      <div>
      <Link key={movieId} to={`cast`}>
      Cast
    </Link>
    </div>
      <div> 
      <Link key={movieId} to={`reviews`}>
      Reviews
    </Link></div>
      <Outlet />
    </div>
  );
};
export default MovieDetails;
