import { useEffect, useState } from "react";
import classes from "./Films.module.css";
import axios from "axios";

import { getFilms } from "../API/films";

const Films = () => {
  const [films, setFilms] = useState();
  console.log("films", films);

  //   console.log("!", films.results[1].producer);
  useEffect(() => {
    getFilms()
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
