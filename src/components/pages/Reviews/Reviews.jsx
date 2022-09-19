import { getReviews } from '../../../services/movies.js';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
    <ul>
      <li>
        <p key={elementOfReviews.content}>{elementOfReviews.content}</p>
      </li>
      <li>
        <p>Reviews couldn't found</p>
      </li>
    </ul>
  );
  return <div>{text}</div>;
};
export default Reviews;
