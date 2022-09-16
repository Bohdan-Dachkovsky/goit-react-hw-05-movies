import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getActorsId } from '../../../services/movies.js';
const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  console.log(movieId);
  useEffect(() => {
    getActorsId(movieId).then(data => {
      setCast(data);
      console.log(data);
    });
  }, [movieId]);

  let actors = cast.map(el => (
    <li>
      <span>{el.title}</span>
    </li>
  ));
  return <div>{actors}</div>;
};
export default Cast;
