import { Route, Routes} from 'react-router-dom';
import { React, Suspense, lazy} from 'react';
import Cast from './components/pages/Cast/Cast.jsx';
import Reviews from './components/pages/Reviews/Reviews.jsx';
import MovieDetails from './components/pages/MovieDetails/MovieDetails.jsx';
import LoaderPage from './components/pages/LoaderPage/LoaderPage.jsx';
import Layout from './components/Layout/Layout.jsx';
const Home = lazy(() => import('./components/pages/Home/Home'));
const Movies = lazy(() => import('./components/pages/Movies/Movies'));

export const App = () => {

  const text = {
    message: 'This page is not created',
    downloadedForm: 'Please click to reload page'
  };
  return (
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          <Route path="/" element={<Layout/>} />
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="*" element={<LoaderPage loading={text} />} />
          </Route>
        </Routes>
      </Suspense>
  );
};
