import { getReviews } from '../../services/movies.js';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from './frameS.module.css';
const Reviews = () => {
  const [elementOfReviews, addReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getReviews(movieId).then(({ results }) => {
      addReviews(results);
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
  return (
    <div>
      {elementOfReviews.length > 0 ? (
        text
      ) : (
        <p className={style.reply}>Sorry, reviews couldn't found</p>
      )}
    </div>
  );
};
export default Reviews;