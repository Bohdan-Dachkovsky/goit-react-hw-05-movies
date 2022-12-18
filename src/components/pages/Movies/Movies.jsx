import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoviesId } from '../../../services/movies.js';
import style from './style.module.css';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [search, setMovie] = useState('');
  // const [name, onMoviesName] = useState('');

  useEffect(() => {
    getMoviesId(search).then(({ results }) => {
      setFilms(results);
    });
  }, [search]);

  const handleChange = event => {
    setMovie(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (search === '') {
      alert(`The movie isn't ${search} loaded`);
      return;
    }
    setMovie('');
  };

  let filmSite = films.map(({ id, title }) => (
    <Link key={id} to={`/movies/${id}`}>
      <li>{title}</li>
    </Link>
  ));

  // const getMovies = () => {
  //   return filmSite.filter(film =>
  //     film.name.toLowerCase().includes(search.toLowerCase())
  //   );
  // };
  return (
    <div className={style.block}>
      <form method="get" onSubmit={handleSubmit} action="greet_user.php"></form>
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
        <button className={style.button} type="submit">
          Search
        </button>
      </label>

      <div className={style.filmBox}>{filmSite}</div>
    </div>
  );
};
export default Movies;
