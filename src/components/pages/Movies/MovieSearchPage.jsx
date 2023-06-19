import { Link } from "react-router-dom";
import s from './searchStyle.module.css'
const MovieSearchPage = ({movieArr}) => {
    
    let filmSite = movieArr.map(({ id, title }) => (
        <Link key={id} to={`/movies/${id}`}>
          <li>{title}</li>
        </Link>
      ));
return (<div className={s.filmBox}>{filmSite}</div>);
}
export default MovieSearchPage;