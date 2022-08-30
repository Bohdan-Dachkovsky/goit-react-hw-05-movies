import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Movies from './pages/Movies/Movies.jsx';
import MovieDetails from './pages/MovieDetails/MovieDetails.jsx';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justifycontent: center;
  alignitems: center;
  fontsize: 40;
  color: rgb(0, 0, 0);
`;
export const App = () => {
  //   {/* <Route  path = '/movies/:movieId/cast ' element = {<MovieDetails/>} >
  // <Route  path = 'movies/movieId/rewievs' element = {<MovieDetails/>}></Route> */}

  return (
    <Container>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">About</Link>
        <Link to="/movies/:movieId">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </Container>
  );
};
