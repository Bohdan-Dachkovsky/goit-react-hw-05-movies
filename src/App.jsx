import { Route, Routes} from 'react-router-dom';
import { React, Suspense, lazy} from 'react';
import Cast from './components/pages/Cast/Cast.jsx';
import Reviews from './components/pages/Reviews/Reviews.jsx';
//import Home from './components/pages/Home/Home.jsx';
//import Movies from './components/pages/Movies/Movies.jsx';
import MovieDetails from './components/pages/MovieDetails/MovieDetails.jsx';
import LoaderPage from './components/pages/LoaderPage/LoaderPage.jsx';
import {Container, Navigation, Link} from './components/index.js'
import style from './mainStyle.css'

const Home = lazy(() => import('./components/pages/Home/Home'));
const Movies = lazy(() => import('./components/pages/Movies/Movies'));

export const App = () => {

  const text = {
    message: 'This page is not created',
    downloadedForm: 'Please click to reload page'
  };
  return (
    <Container>
      <Navigation>
        <nav className="navigation">
          <li className={style.linkStyle}>
            <Link to="/">Home</Link>
            <div className={style.textLights}></div>
          </li>
          <li className={style.linkStyle}>
            <Link to="/movies">Movies</Link>
            <div className={style.textLights}></div>
          </li>
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
        </Routes>
      </Suspense>
    </Container>
  );
};
