import { Outlet } from 'react-router-dom';
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
  let filmSite = films.map(element => (
    <video
      className={style.vPlayer}
      width="620"
      height="360"
      key={element.id}
      controls
      preload
    >
      <source src={element.poster_path} type="video/mp4" />
    </video>
  ));
  return (
    <div className={style.block}>
      <label className={style.coverEl} for="searchingFilms">
        Search Movies
        <input
          className={style.input}
          type="search"
          id="searchingFilms"
        ></input>
      </label>
      <div className={style.filmBox}>{filmSite}</div>
      <Outlet />
    </div>
  );
};
export default Movies;
