import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { getMovies } from '../../../services/movies.js';
const Movies = () => {
  useEffect(() => {
    getMovies().then(({ data }) => {
      console.log(data);
    });
  }, []);

  return (
    <div>
      <p>{}</p>
      <Outlet />
    </div>
  );
};
export default Movies;
