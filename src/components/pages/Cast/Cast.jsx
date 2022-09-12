import { Link } from 'react-router-dom';
import { getMovie } from '../../../services/movies.js';
import { useState, useEffect } from 'react';
const Cast = () => {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    getMovie().then(data => {
      setCast(data);
      console.log(data);
    });
  });

  let actors = cast.map(({ id }) => (
    <Link key={id} to={`movies/${id}/cast`}>
      Cast
    </Link>
  ));
  return <div> {actors}</div>;
};
export default Cast;
