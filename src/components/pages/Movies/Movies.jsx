import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { getMovies } from '../../../services/movies.js';
const Movies = ({ about }) => {
  useEffect(() => {
    getMovies().then(({ results }) => {
      console.log(results);
    });
  }, []);
  console.log(about.overview);
  return (
    <div>
      <p>{}</p>
      <Outlet />
    </div>
  );
};
export default Movies;
