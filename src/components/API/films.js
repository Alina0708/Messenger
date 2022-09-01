import axios from "axios";
import { filmsLoad } from "../../redux/actions/postsActions";

// export const getFilms = () => {
//   return (dispatch) => {
//     return axios
//       .get("https://swapi.dev/api/films/")
//       .then((response) => {
//         dispatch(filmsLoad(response.data));
//         return response.data;
//       })
//       .catch((error) => console.log("error"));
//   };
// };

export const getFilms = () => async (dispatch) => {
  try {
    const response = await axios.get("https://swapi.dev/api/films/");
    dispatch(filmsLoad(response.data));
    return response.data;
  } catch (ex) {
    console.log(ex + "- error");
  }
};
