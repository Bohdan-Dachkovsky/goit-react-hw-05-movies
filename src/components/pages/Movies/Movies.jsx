import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoviesId } from '../../../services/movies.js';
import style from './style.module.css';

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
    window.location = 'query=' + this.elements.movie;
    setMovie(movie);
    form.reset();
  };

  // const handleClick = (event) => {
  //   document.addEventListener( '?query=${JSON.stringify(search)}', function( event ) {
  //       location = 'http://example.com/';
  //     }, false )
  //   }
  //   // window.location.href = `?query=${JSON.stringify(search)}`;
  // };
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
          <button className={style.button} type="submit">
            Search
          </button>
        </label>
      </form>

      <div className={style.filmBox}>{filmSite}</div>
    </div>
  );
};
export default Movies;
