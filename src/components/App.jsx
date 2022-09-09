import { Route, Routes, Link, useParams } from 'react-router-dom';
import { React, Suspense, useState, useTransition } from 'react';

import Home from './pages/Home/Home.jsx';
import Movies from './pages/Movies/Movies.jsx';
import MovieDetails from './pages/MovieDetails/MovieDetails.jsx';
import styled from 'styled-components';

import { createFetchStore } from 'react-suspense-fetch';

// 1️⃣

const store = createFetchStore(async userId => {
  const res = await fetch(`https://reqres.in/api/users/${userId}?delay=3`);
  const data = await res.json();
  return data;
});

store.prefetch('1');

const DisplayData = ({ result, update }) => {
  const [isPending, startTransition] = useTransition();
  const onClick = () => {
    startTransition(() => {
      update('2');
    });
  };
  return (
    <div>
      <div>First Name: {result.data.first_name}</div>
      <button type="button" onClick={onClick}>
        Refetch user 2
      </button>
      {isPending && 'Pending...'}
    </div>
  );
};

const Main = () => {
  const [id, setId] = useState('1');
  const result = store.get(id);
  const update = nextId => {
    store.prefetch(nextId);
    setId(nextId);
  };
  return <DisplayData result={result} update={update} />;
};
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

export const App = ({ result, update }) => {
  const { movieId } = useParams();
  console.log(movieId);
  //   {/* <Route  path = '/movies/:movieId/cast ' element = {<MovieDetails/>} >
  // <Route  path = 'movies/movieId/rewievs' element = {<MovieDetails/>}></Route> */}
  // const [text, setInfo] = useState([]);
  // const aboutFilms = elements => {
  //   setInfo(elements);
  // };

  return (
    <Container>
      <Navigation>
        <nav className="navigation">
          <Link style={linkStyle} to="/">
            Home
          </Link>
          <Link style={linkStyle} to="/movies">
            About
          </Link>
          <Link style={linkStyle} to="/movies/:movieId">
            Products
          </Link>
        </nav>
      </Navigation>
      <Suspense fallback={<span>Loading...</span>}>
        <Main />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />}>
            <Route path=":movieId" element={<MovieDetails />}>
              {/* <Route path="/cast" element={<Cast />} />
            <Route path="/reviews" element={<Reviews />} /> */}
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
};
