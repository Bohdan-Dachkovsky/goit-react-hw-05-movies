import { getReviews } from '../../../services/movies.js';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Reviews = () => {
  const [elementOfReviews, addReviews] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    getReviews().then(data => {
      addReviews(data);
      console.log(data);
    });
  }, [id]);

  let text = (
    <ul>
      <li>
        {' '}
        <p key={elementOfReviews.title}>{elementOfReviews.reviews}</p>
      </li>
      <li>
        <p>Reviews couldn't found</p>
      </li>
    </ul>
  );
  return <div>{text}</div>;
};
export default Reviews;
