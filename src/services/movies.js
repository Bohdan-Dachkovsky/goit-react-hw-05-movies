import axios from 'axios';
const API_KEY = '0eea8bea59a913a72c55562f66c1e72e';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `/trending/movie/day?api_key=${API_KEY}&language=US&page=1&include_adult=false`
  );

  return data;
};
export const getMovies = async () => {
  const { data } = await axios.get(
    `search/movie?api_key=0eea8bea59a913a72c55562f66c1e72e&query=QUERY&page=1&include_adult=false`
  );
  return data;
};
