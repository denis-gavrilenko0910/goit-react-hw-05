import axios from "axios";

const API_KEY = "1b0afd500a228fff5c2f484fb74cf7b7";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = { api_key: API_KEY };

export const getTrandingMovies = async () => {
  const { data } = await axios.get("/trending/movie/day");
  return data;
};

export const getSearchMovies = async (query) => {
  const { data } = await axios.get(`/search/movie?query=${query}`);
  return data;
};
export const getMovieDetails = async (id) => {
  const { data } = await axios.get(`/movie/${id}`);
  return data;
};

export const getMovieCredits = async (id) => {
  const { data } = await axios.get(`/movie/${id}/credits`);
  return data;
};
export const getMovieReviews = async (id) => {
  const { data } = await axios.get(`/movie/${id}/reviews`);
  return data;
};
