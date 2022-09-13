import { getMovie } from '../../../services/movies.js';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Reviews = () => {
  const [reviews, getReviews] = useState([]);
  const { id } = useParams();
  console.log(id);
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
