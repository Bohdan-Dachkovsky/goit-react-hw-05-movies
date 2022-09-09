import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovies } from '../../../services/movies.js';
import style from './style.module.css';

const Movies = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    getMovies().then(({ results }) => {
      setFilms(results);
      console.log(results);
    });
  }, []);

  //useEffect(() => {
  //   getMoviesId().then(data => {
  //     setFilms(data);
  //     console.log(data);
  //   });
  // }, []);
  let filmSite = films.map(element => (
    <Link key={element.id} to={`/movie/${element.id}`}>
      <li>{element.title}</li>
    </Link>
  ));
  return (
    <div>
      <div className={style.block}>
        <label className={style.coverEl} htmlFor="searchingFilms">
          Search Movies
          <input
            className={style.input}
            type="search"
            id="searchingFilms"
          ></input>
        </label>
        <div className={style.filmBox}>{filmSite}</div>
      </div>
      <Outlet />
    </div>
  );
};
export default Movies;
