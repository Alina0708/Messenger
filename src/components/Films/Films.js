import { useEffect, useState } from "react";
import classes from "./Films.module.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import axios from "axios";

import { getFilms } from "../API/films";

const Films = () => {
  const dispatch = useDispatch();

  const filmaFromStore = useSelector((state) => state);
  console.log("store filma", filmaFromStore);
  const [films, setFilms] = useState();

  useEffect(() => {
    dispatch(getFilms())
      .then((response) => setFilms(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {films && (
        <>
          {films.results.map((film) => (
            <div>
              <h3>{film.title}</h3>
              <p>Producer:{film.producer}</p>
              <p>{film.opening_crawl}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
export default Films;
