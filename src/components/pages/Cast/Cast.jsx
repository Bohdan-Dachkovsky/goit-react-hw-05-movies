import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getActorsId } from '../../../services/movies.js';
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

  let actors = cast.map(({ id, profile_path, name, character }) => {
    return (
      <li key={id}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
          alt={name}
        />
        <p>
          {name}, character: {character}
        </p>
      </li>
    );
  });
  return <div>{actors}</div>;
};
export default Cast;
