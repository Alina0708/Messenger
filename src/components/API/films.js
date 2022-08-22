import axios from "axios";

export const getFilms = () => {
  return axios
    .get("https://swapi.dev/api/films/")
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.error(error));
};
