import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getActorsId } from '../../../services/movies.js';
import pageStyle from './actors.module.css';
const Cast = () => {
  const [cast, setCast] = useState([]);
  console.log(cast);

  const { movieId } = useParams();

  useEffect(() => {
    getActorsId(movieId).then(({ cast }) => {
      setCast(cast);
    });
  }, [movieId]);

  let actors = cast.map(item => (
    <li key={item.id}>
      <p className={pageStyle.text}>{item.name}</p>
    </li>
  ));

  return <div>{actors}</div>;
};
export default Cast;
