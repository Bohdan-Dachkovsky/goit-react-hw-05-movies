import axios from 'axios';
const API_KEY = '0eea8bea59a913a72c55562f66c1e72e';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie/day';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `?api_key=${API_KEY}&language=US&page=1&include_adult=false`
  );
  console.log(data);
  return data;
};
