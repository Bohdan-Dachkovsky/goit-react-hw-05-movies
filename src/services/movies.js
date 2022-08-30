import axios from 'axios';
const API_KEY = '0eea8bea59a913a72c55562f66c1e72e';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie/550';
axios.defaults.headers.common['Authorizantion'] = API_KEY;
axios.defaults.params = {};
// const language = en-US;
// const page = 1;
// const include_adult = false
export const getMovies = (language, page, include_adult) => {
  const { data } = axios.get(
    `&language=${(language = `US`)}&page=${(page = 1)}&include_adult=${false}`
  );
  return data;
};
