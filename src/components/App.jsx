import { Route, Routes, Link } from 'react-router-dom';
import { React, Suspense, lazy } from 'react';
import Cast from './pages/Cast/Cast.jsx';
import Reviews from './pages/Reviews/Reviews.jsx';
//import Home from './pages/Home/Home.jsx';
//import Movies from './pages/Movies/Movies.jsx';
import MovieDetails from './pages/MovieDetails/MovieDetails.jsx';
import MoviesPage from './pages/MoviesPage/MoviesPage.jsx';
import LoaderPage from './pages/LoaderPage/LoaderPage.jsx';
import styled from 'styled-components';
const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justifycontent: center;
  alignitems: center;
  fontsize: 40;
  color: rgb(0, 0, 0);
`;
const Navigation = styled.nav`
  margin: 0px;
  font-size: bold;
  font-weight: 700;
  text-align: center;
  display: flex;
  flex-direction: row;
`;
const linkStyle = {
  margin: '1rem',
  textDecoration: 'none',
  color: 'blue',
};
const text = {
  message: 'This page is not created',
  downloadedForm: 'Please click to reload page',
};
export const App = () => {
  return (
    <Container>
      <Navigation>
        <nav className="navigation">
          <Link style={linkStyle} to="/">
            Home
          </Link>
          <Link style={linkStyle} to="/movies">
            Movies
          </Link>
        </nav>
      </Navigation>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="*" element={<LoaderPage loading={text} />} />
          </Route>
          <Route exact path="/movie/:movieId" element={<MoviesPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
