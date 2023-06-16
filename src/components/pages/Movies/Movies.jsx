import { useEffect, useState } from 'react';
import { getMoviesId } from '../../../services/movies.js';
import MoviePage from '../MoviePage/MoviePage.jsx'
import style from './style.module.css';
const API_KEY = '0eea8bea59a913a72c55562f66c1e72e';
const Movies = () => {
  const [films, setFilms] = useState([]);
  const [search, setMovie] = useState('');

  useEffect(() => {
    if(search !== 0) {
    getMoviesId(search).then(({ results }) => {
      setFilms(results);
    });
  }
  }, [search]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const movie = form.elements.movie.value;
    setMovie(movie);
    form.reset();
  };
  document.addEventListener('submit',(event) => {

    window.history.replaceState(`search/movie?api_key=${API_KEY}&query=${search}&page=1&include_adult=false`, 'movie', `/goit-react-hw-05-movies/?search=${search}`);
    event.preventDefault()
  })



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
       <MoviePage movieArr = {films}/>

    </div>
  );
};
export default Movies;
