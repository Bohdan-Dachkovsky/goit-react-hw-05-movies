import { Route, Routes, Link } from 'react-router-dom';
import { React, Suspense } from 'react';

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
      <Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          {/* <Route path="/cast" element={<Cast />} />
            <Route path="/reviews" element={<Reviews />} /> */}
        </Routes>
      </Suspense>
    </Container>
  );
};
