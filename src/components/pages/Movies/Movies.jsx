import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoviesId } from '../../../services/movies.js';
import style from './style.module.css';
const API_KEY = '0eea8bea59a913a72c55562f66c1e72e';
const Movies = () => {
  const [films, setFilms] = useState([]);
  const [search, setMovie] = useState('');

  useEffect(() => {
    getMoviesId(search).then(({ results }) => {
      setFilms(results);
    });
    
  }, [search]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const movie = form.elements.movie.value;
    setMovie(movie);
    form.reset();
  };

  const handleClick = () => {
   window.replaceState(`search/movie?api_key=${API_KEY}&query=${search}&page=1&include_adult=false`, '', `search=${search}`);
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
      <form onSubmit={handleSubmit} method="get">
        <label className={style.coverEl} htmlFor="searchingFilms">
          <input
            className={style.input}
            type="search"
            id="searchingFilms"
            placeholder="Type movie name"
            name="movie"
            required
          ></input>
          <button onClick={handleClick} className={style.button} type="submit">
            Search
          </button>
        </label>
      </form>

      <div className={style.filmBox}>{filmSite}</div>
    </div>
  );
};
export default Movies;
