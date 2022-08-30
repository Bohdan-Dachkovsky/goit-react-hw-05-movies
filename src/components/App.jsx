import { Route, Routes, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home/Home.jsx';
import Movies from './pages/Movies/Movies.jsx';
import MovieDetails from './pages/MovieDetails/MovieDetails.jsx';
import styled from 'styled-components';
import axios from 'axios';
const Container = styled.div`
  height: 100vh;
  display: flex;
  justifycontent: center;
  alignitems: center;
  fontsize: 40;
  color: rgb(0, 0, 0);
`;
export const App = () => {
  const [movie, setMovie] = useState([]);
  // console.log(movie);
  const [error, setError] = useState(null);
  //   {/* <Route  path = '/movies/:movieId/cast ' element = {<MovieDetails/>} >
  // <Route  path = 'movies/movieId/rewievs' element = {<MovieDetails/>}></Route> */}
  const axiosMovies = () => {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/550?api_key=0eea8bea59a913a72c55562f66c1e72e&language=en-US&page=1&include_adult=false`
      )
      .then(({ data }) => {
        setMovie(data);
      })
      .catch(error => {
        setError(true);
        console.log(error.message);
      });
  };
  useEffect(() => {
    axiosMovies();
  }, []);
  return (
    <Container>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">About</Link>
        <Link to="/movies/:movieId">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home searchMovie={movie} error={error} />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </Container>
  );
};
