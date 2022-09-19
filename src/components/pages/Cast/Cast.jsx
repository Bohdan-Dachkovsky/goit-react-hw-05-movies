import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getActorsId } from '../../../services/movies.js';
import pageStyle from './actors.module.css';
const Cast = () => {
  const [cast, setCast] = useState([]);
  console.log(cast);
  const { movieId } = useParams();
  // console.log(movieId);
  useEffect(() => {
    getActorsId(movieId).then(({ cast }) => {
      setCast(cast);
      console.log(cast);
    });
  }, [movieId]);

  let actors = (
    <li key={cast.id}>
      <img
        src={
          cast.profile_path
            ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
            : `https://via.placeholder.com/150x225/808080/ff4e00/?text=GoIT.React`
        }
        alt={cast.original_name}
        className={pageStyle.image}
      />

      <p className={pageStyle.text}>Character couldn't found</p>
    </li>
  );

  return <div>{actors}</div>;
};
export default Cast;
