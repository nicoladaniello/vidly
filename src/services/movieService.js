import http from "./httpService";

const apiEndpoint = "/movies";

function movieUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getMovies() {
  return http.get(`${apiEndpoint}`);
}

export function getMovie(id) {
  return http.get(movieUrl(id));
}

export async function saveMovie(movie) {
  if (!movie._id) return http.post(`${apiEndpoint}`, movie);

  const body = { ...movie };
  delete body._id;
  return http.put(movieUrl(movie._id), body);
}

export function deleteMovie(id) {
  return http.delete(movieUrl(id));
}
