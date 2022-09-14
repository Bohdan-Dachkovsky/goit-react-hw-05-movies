import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getActorsId } from '../../../services/movies.js';
const Cast = () => {
  const { id } = useParams();
  console.log(id);
  const [cast, setCast] = useState([]);
  useEffect(() => {
    getActorsId().then(data => {
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
