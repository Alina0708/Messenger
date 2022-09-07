import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";

import { getFilms } from "../API/films";

const Films = () => {
  const dispatch = useDispatch();
  const filmsFromStore = useSelector((state) => state.films.films.results);
  useEffect(() => {
    dispatch(getFilms());
  });

  return (
    <div>
      {filmsFromStore && (
        <>
          {filmsFromStore.map((film, index) => (
            <div key={`film${index}`}>
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
