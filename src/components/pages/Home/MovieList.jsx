import { Link } from 'react-router-dom';
import grid from './gridStyle.module.css';

const MovieList = ({movieArr, }) => {
    const renderFilms = movieArr.map(({ id, title }) => (
        <Link key={id} to={`/movies/${id}`}>
          {title}
        </Link>
         ));
return (<div className={grid.box}>{renderFilms}</div>);
};
export default MovieList;