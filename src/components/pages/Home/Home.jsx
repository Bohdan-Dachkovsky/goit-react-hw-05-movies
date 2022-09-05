import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../../services/movies.js';
const Home = () => {
  const [elements, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTrendingMovies()
      .then(({ data }) => {
        setMovies(data.results);
      })
      .catch(error => {
        setError(error);
        console.log(error.message);
      });
  }, []);

  console.log(elements);
  const el = elements.map(photo => (
    <video key={photo.message} width="480" controls>
      {/* <source src={``}
      type="video/mp4"> */}
    </video>
  ));
  return (
    <div>
      <li> {error || el}</li>
    </div>
  );
};
export default Home;
