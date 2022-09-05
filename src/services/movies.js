import axios from 'axios';
const API_KEY = '0eea8bea59a913a72c55562f66c1e72e';
axios.defaults.baseURL = 'api.themoviedb.org/3/movie/550';
export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `?api_key=${API_KEY}&language=US&page=1&include_adult=false`
  );
  console.log(data);
  return data;
};

// axios.defaults.params = {};
// const language = en-US;
// const page = 1;
// const include_adult = false
// export const getMovies = (language, page, include_adult) => {
//   const { data } = axios.get(
//     `/trending/movie/day?api_key=${API_KEY}&language=${(language = `US`)}&page=${(page = 1)}&include_adult=${false}`
//   );
//   return data;
// };
