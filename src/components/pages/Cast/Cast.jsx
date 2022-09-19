import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getActorsId } from '../../../services/movies.js';
import pageStyle from './actors.module.css';
const Cast = () => {
  const [cast, setCast] = useState([]);
  console.log(cast);
  const { movieId } = useParams();
  console.log(movieId);
  useEffect(() => {
    getActorsId(movieId).then(data => {
      setCast(data);
      console.log(data);
    });
  }, [movieId]);

  let actors = (
    <li key={movieId}>
      {/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBGhjJD-kcvfrbw4yJTGmbn2INV7_sHihPQw&usqp=CAU */}
      <img
        src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
        alt={cast.original_name}
        className={pageStyle.image}
      />
      <p className={pageStyle.text}>Name: {cast.name}</p>
      <p className={pageStyle.text}>Character couldn't found</p>
    </li>
  );

  return <div>{actors}</div>;
};
export default Cast;
