import axios from 'axios';
import { useState } from 'react';

const Home = ({ movie }) => {
  let [photo, setPhoto] = useState([]);
  const getPhoto = axios
    .get(`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`)
    .then(({ data }) => {
      setPhoto(data);
      console.log(data);
    })
    .catch(error => {
      console.log(error.message);
    });
  getPhoto();
  return (
    <div>
      <img src={photo} alt={movie.ganres[0].name} />
    </div>
  );
};
export default Home;
