import { Route, Routes, Link } from 'react-router-dom';
// import { useState } from 'react';
import Home from './pages/Home/Home.jsx';
import Movies from './pages/Movies/Movies.jsx';
import MovieDetails from './pages/MovieDetails/MovieDetails.jsx';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justifycontent: center;
  alignitems: center;
  fontsize: 40;
  color: rgb(0, 0, 0);
`;
export const App = () => {
  //   {/* <Route  path = '/movies/:movieId/cast ' element = {<MovieDetails/>} >
  // <Route  path = 'movies/movieId/rewievs' element = {<MovieDetails/>}></Route> */}
  // const [text, setInfo] = useState([]);
  // const aboutFilms = elements => {
  //   setInfo(elements);
  // };

  return (
    <Container>
      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/movies">About</Link>
        <Link to="/movies/:movieId">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}>
          <Route path=":movieId" element={<MovieDetails />}>
            {/* <Route path="/cast" element={<Cast />} />
            <Route path="/reviews" element={<Reviews />} /> */}
          </Route>
        </Route>
      </Routes>
    </Container>
  );
};
