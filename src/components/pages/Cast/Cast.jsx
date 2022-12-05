import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getActorsId } from '../../../services/movies.js';
import pageStyle from './actors.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  console.log(cast);
  const navigate = useNavigate();
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

  return (
    <div>
      <ul>
        {actors}
        <li>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            Go back
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Cast;
