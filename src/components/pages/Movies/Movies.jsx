import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { getMovies } from '../../../services/movies.js';
const Movies = () => {
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default Movies;
