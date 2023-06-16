import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesId } from '../../../services/movies.js';
import Form from '../../Form/Form.jsx';
import MoviePage from '../MoviePage/MoviePage.jsx'
import style from './style.module.css';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [search, setMovie] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("movie");


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
    setSearchParams({ name: movie});
    form.reset();
  };
 
  // const getMovies = () => {
  //   return filmSite.filter(film =>
  //     film.name.toLowerCase().includes(search.toLowerCase())
  //   );
  // };
  return (
    <div className={style.block}>
       <Form submit = {handleSubmit} state={search} search = {name}/>
       <MoviePage movieArr = {films}/>

    </div>
  );
};
export default Movies;
