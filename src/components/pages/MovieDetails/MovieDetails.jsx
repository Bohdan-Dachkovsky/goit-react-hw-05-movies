import { useParams, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovie } from '../../../services/movies.js';
import detailsStyle from './details.module.css';
const MovieDetails = () => {
  let { movieId } = useParams();
  console.log(movieId);
  const [movie, addMovie] = useState([]);

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
  let movies = movie.map((element, index) => (
    <ol key={element.original_title}>
      <li className={detailsStyle.items} key={index}>
        <img
          src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
          alt={element.title}
          srcset={`https://image.tmdb.org/t/p/w500${element.poster_path} 2x`}
        />
        <p className={detailsStyle.text}>
          &nbsp;&nbsp;&nbsp;&nbsp;{element.overview}
        </p>
      </li>
    </ol>
  ));
  return (
    <div className={detailsStyle.boxD}>
      {movies}
      <Outlet />
    </div>
  );
};
export default MovieDetails;
