import { Route, Routes, NavLink} from 'react-router-dom';
import { React, Suspense, lazy} from 'react';
import Cast from './components/pages/Cast/Cast.jsx';
import Reviews from './components/pages/Reviews/Reviews.jsx';
//import Home from './pages/Home/Home.jsx';
//import Movies from './pages/Movies/Movies.jsx';
import MovieDetails from './components/pages/MovieDetails/MovieDetails.jsx';
import LoaderPage from './components/pages/LoaderPage/LoaderPage.jsx';
import styled from 'styled-components';
const Home = lazy(() => import('./components/pages/Home/Home'));
const Movies = lazy(() => import('./components/pages/Movies/Movies'));
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
  width: auto;
  margin: 0px;
  font-size: bold;
  font-weight: 700;
  text-align: center;
  display: flex;
  flex-direction: row;
  textdecoration: none;
  &.linkStyle {

      margin: 0px;
      padding: 0px;
    }
`;
const linkStyle = {
  display: 'flex',
  margin: '1rem',
  flexDirection: 'row',
  textDecoration: 'none',
  linkStyle: 'none',
};
const text = {
  message: 'This page is not created',
  downloadedForm: 'Please click to reload page',
};
const textLights = {
  display: 'block',
  width: '15px',
  height: '15px',
};
export const App = () => {
  //  const [search, setSearchMovie] = useState('');

  const Link = styled(NavLink)`
    padding: 0px 25px;
    text-decoration: none;
    font-weight: 500;

    &.active {
      color: black;
    }
  `;
  return (
    <Container>
      <Navigation>
        <nav className="navigation">
          <li className={linkStyle}>
            <Link to="/">Home</Link>
            <div className={textLights}></div>
          </li>
          <li className={linkStyle}>
            <Link to="/movies">Movies</Link>
            <div className={textLights}></div>
          </li>
        </nav>
      </Navigation>
      <Suspense fallback={<div>Loading...</div>}>
 
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies onSubmit />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="*" element={<LoaderPage loading={text} />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
};
