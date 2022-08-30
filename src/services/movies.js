import axios from 'axios';
const API_KEY = '0eea8bea59a913a72c55562f66c1e72e';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie/';
axios.defaults.headers.common['Authorizantion'] = API_KEY;
axios.defaults.params = {};
export const getMovies = (language, page, include_adult) => {
  const { data } = axios.get(
    `&language=${language}&page=${page}&include_adult=${include_adult}`
  );
  return data;
};
