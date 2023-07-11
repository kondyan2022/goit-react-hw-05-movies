import axios from 'axios';
const API_KEY = '65004062449cedf299d488ba09607cf0';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['accept'] = 'application/json';
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

export const getTrending = async () => {
  const { data } = await axios.get(`trending/movie/week`);
  return data;
};

export const getCasts = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/credits`);
  return data;
};

export const getReviews = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/reviews`);
  return data;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`movie/${movieId}`);
  return data;
};

export const getSearchMovies = async query => {
  const { data } = await axios.get('search/movie', {
    params: {
      query: query,
      include_adult: true,
      language: 'en-US',
      page: 1,
      region: 'US',
    },
  });
  return data;
};
