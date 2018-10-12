import http from "./httpService";
import config from "../config.json";

export function getGenres() {
  return http.get(`${config.apiEndpoint}/genres`);
}

export function getGenre(id) {
  return http.get(`${config.apiEndpoint}/genres/${id}`);
}
