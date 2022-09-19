import { getReviews } from '../../../services/movies.js';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from './frameS.module.css';
const Reviews = () => {
  const [elementOfReviews, addReviews] = useState([]);
  const { movieId } = useParams();
  console.log(movieId);
  useEffect(() => {
    getReviews(movieId).then(({ results }) => {
      addReviews(results);
      console.log(results);
    });
  }, [movieId]);

  let text = (
    <ul key={elementOfReviews.id} className={style.reviews}>
      <li>
        <p className={style.content}>{elementOfReviews.content}</p>
      </li>
      <li>
        <p className={style.content}>Reviews couldn't found</p>
      </li>
    </ul>
  );
  return <div>{text}</div>;
};
export default Reviews;
