import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getActorsId } from '../../../services/movies.js';
const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    getActorsId(id).then(data => {
      setCast(data);
      console.log(data);
    });
  });
  // const renderFilms = movies.map(({ id, title }) => (
  //   <Link key={id} to={`movies/${id}`}>
  //     {title}
  //   </Link>
  // ));
  let actors = cast.map(({ id }) => (
    <Link key={id} to={`movies/${id}/cast`}>
      Cast
    </Link>
  ));
  return <div> {actors}</div>;
};
export default Cast;
