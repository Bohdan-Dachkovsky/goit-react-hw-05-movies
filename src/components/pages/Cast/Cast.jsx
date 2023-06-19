import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getActorsId } from '../../../services/movies.js';
import pageStyle from './actors.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getActorsId(movieId).then(({ cast }) => {
      setCast(cast);
      console.log(cast)
    });
  }, [movieId]);



  return (
    <div>
      <ul>
      {cast.map(item => (
    <li key={item.id} className={pageStyle.list}>
    <picture>
    <source 
    srcSet={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
    media = '(min-width:250px)'
    ></source>
    <img
        src={item.profile_path ? `https://image.tmdb.org/t/p/w500/${item.profile_path}` :
        `https://w7.pngwing.com/pngs/741/68/png-transparent-user-computer-icons-user-miscellaneous-cdr-rectangle.png`}
        alt={item.id}
        className={pageStyle.images}
      />
      
    </picture>  
      <p className={pageStyle.text}>{item.name}</p>
    </li>
  ))
  }
       
      </ul>
    </div>
  );
};
export default Cast;