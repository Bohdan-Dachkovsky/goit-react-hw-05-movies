import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoviesId } from '../../../services/movies.js';
import style from './style.module.css';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [search, setMovie] = useState({ movie: '' });

  useEffect(() => {
    getMoviesId(search).then(({ results }) => {
      setFilms(results);
      console.log(results);
    });
  }, [search]);
  const handleChange = event => {
    setMovie({ movie: event.currentTarget.value.toLowerCase() });
  };

  let filmSite = films.map(({ id, title }) => (
    <Link key={id} to={`/movie/${id}`}>
      <li>{title}</li>
    </Link>
  ));

  // const getMovies = () => {
  //   return filmSite.filter(film =>
  //     film.name.toLowerCase().includes(search.toLowerCase())
  //   );
  // };
  return (
    <div>
      {/* <ul>{object}</ul>  */}
      <div className={style.block}>
        <label className={style.coverEl} htmlFor="searchingFilms">
          Search Movies
          <input
            className={style.input}
            type="search"
            id="searchingFilms"
            placeholder="Type movie name"
            onChange={handleChange}
            name="movie"
            required
          ></input>
        </label>
        <div className={style.filmBox}>{filmSite}</div>
      </div>
    </div>
  );
};
export default Movies;
