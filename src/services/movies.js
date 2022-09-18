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
export const getMovie = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=US&page=1&include_adult=false`
  );
  return data;
};
export const getFilm = async id => {
  const { data } = await axios.get(
    `/movie/${id}?api_key=${API_KEY}&language=US&page=1&include_adult=false`
  );
  return data;
};
export const getActorsId = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data;
};
export const getReviews = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return data;
};
export const getMoviesId = async search => {
  const { data } = await axios.get(
    `search/movie?api_key=0eea8bea59a913a72c55562f66c1e72e&query=${search.movie}&page=1&include_adult=false`
  );
  return data;
};
export const getSearchMovie = async id => {
  const { data } = await axios.get(
    `search/movie/${id}?api_key=0eea8bea59a913a72c55562f66c1e72e&page=1&include_adult=false`
  );
  return data;
};
