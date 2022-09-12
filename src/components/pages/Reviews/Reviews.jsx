import { getMovie } from '../../../services/movies.js';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Reviews = () => {
  const [reviews, getReviews] = useState([]);
  useEffect(() => {
    getMovie().then(data => {
      getReviews(data);
      console.log(data);
    });
  });

  let text = reviews.map(({ id }) => (
    <Link key={id} to={`movies/${id}/cast`}>
      Reviews
    </Link>
  ));
  return <div>{text}</div>;
};
export default Reviews;
