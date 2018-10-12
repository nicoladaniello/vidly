import http from "./httpService";
import { apiUrl } from "../config.json";

function movieUrl(id) {
  return `${apiUrl}/movies/${id}`;
}

export function getMovies() {
  return http.get(`${apiUrl}/movies`);
}

export function getMovie(id) {
  return http.get(movieUrl(id));
}

export async function saveMovie(movie) {
  if (!movie._id) return http.post(`${apiUrl}/movies`, movie);

  const body = { ...movie };
  delete body._id;
  return http.put(movieUrl(movie._id), body);
}

export function deleteMovie(id) {
  return http.delete(movieUrl(id));
}
