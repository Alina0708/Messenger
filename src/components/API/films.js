import axios from "axios";
import { filmsLoad } from "../../redux/actions/postsActions";

export const getFilms = () => {
  return (dispatch) => {
    return axios
      .get("https://swapi.dev/api/films/")
      .then((response) => {
        dispatch(filmsLoad(response.data));
        return response.data;
      })
      .catch((error) => console.log("error"));
  };
};
