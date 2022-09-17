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

  let actors = cast.map(({ id, poster_path, name, character }) => {
    return (
      <li key={id}>
        <img
          src={`https://imgs.smoothradio.com/images/146480?width=1980&crop=16_9&signature=3wCwcBcjqiIGJ0L5DuHyqX1uh_E=`}
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
