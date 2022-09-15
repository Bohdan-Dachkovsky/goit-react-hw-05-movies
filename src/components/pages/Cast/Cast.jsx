import { useParams } from 'react-router-dom';
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

  let actors = cast.map(({ id }) => (
    <li key={id} to={`movies/${id}/cast`}>
      Cast
    </li>
  ));
  return <div> {actors}</div>;
};
export default Cast;
