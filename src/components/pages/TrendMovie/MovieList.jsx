import { Link } from 'react-router-dom';
import grid from './grid.module.css';

const MovieList = ({movieArr, error}) => {
    const renderFilms = movieArr.map(({ id, title }) => (
        <Link key={id} to={`movies/${id}`}>
          {title}
        </Link>
         ));
return <div className={grid.box}>{error || renderFilms}</div>;
};
export default MovieList