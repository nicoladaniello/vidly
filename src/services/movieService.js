import http from "./httpService";
import config from "../config.json";

export function getMovies() {
  return http.get(`${config.apiEndpoint}/movies`);
}

export function getMovie(id) {
  return http.get(`${config.apiEndpoint}/movies/${id}`);
}

export async function saveMovie(movie) {
  if (!movie._id) return http.post(`${config.apiEndpoint}/movies`, movie);

  const body = { ...movie };
  delete body._id;
  return http.put(`${config.apiEndpoint}/movies/${movie._id}`, body);
}

export function deleteMovie(id) {
  return http.delete(`${config.apiEndpoint}/movies/${id}`);
}
