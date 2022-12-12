import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoviesId } from '../../../services/movies.js';
import style from './style.module.css';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [search, setMovie] = useState({ movie: '' });
  // const [name, onMoviesName] = useState('');

  useEffect(() => {
    getMoviesId(search).then(({ results }) => {
      setFilms(results);
    });
  }, [search]);

  const handleChange = event => {
    setMovie({
      movie: event.currentTarget.value.toLowerCase(),
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (search.movie === '') {
      alert(`The movie isn't ${search.movie} loaded`);
      return;
    }
    // onMoviesName(search.movie);
    setMovie('');
  };

  let filmSite = films.map(({ id, title }) => (
    <Link
      key={id}
      to={`/movie/${id}?query=${JSON.stringify(search.movie).replace(
        /"/g,
        ''
      )}`}
    >
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
        <form onSubmit={handleSubmit}></form>
        <label className={style.coverEl} htmlFor="searchingFilms">
          <input
            className={style.input}
            type="search"
            id="searchingFilms"
            onChange={handleChange}
            placeholder="Type movie name"
            name="movie"
            required
          ></input>
          {/* <button className={style.button} type="submit">
            Search
          </button> */}
        </label>

        <div className={style.filmBox}>{filmSite}</div>
      </div>
    </div>
  );
};
export default Movies;
