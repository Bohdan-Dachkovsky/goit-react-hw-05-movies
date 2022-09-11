import { useParams, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../../services/movies.js';
import detailsStyle from './details.module.css';
const MovieDetails = () => {
  let { movieId } = useParams();
  // console.log(movieId);
  const [text, addText] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    getTrendingMovies(movieId)
      .then(({ results }) => {
        addText(results);
      })
      .catch(error => {
        setError(error);
        console.log(error.message);
      });
  }, [movieId]);
  let paragraph = text.map((texts, index) => (
    <li className={detailsStyle.items} key={index}>
      <p className={detailsStyle.text}>{texts.title}</p>
      <p className={detailsStyle.text}>
        &nbsp;&nbsp;&nbsp;&nbsp;{texts.overview}
      </p>
    </li>
  ));
  return (
    <div className={detailsStyle.boxD}>
      {error || paragraph}
      <Outlet />
    </div>
  );
};
export default MovieDetails;
