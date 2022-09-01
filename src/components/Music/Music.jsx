// import mp3 from "../../music/test1.mp3";
import React, { useRef } from "react";

import play from "../../image/play.png";
import pause from "../../image/pause.png";
import classes from "./Music.module.css";

const Music = () => {
  //*/ const dispatch = useDispatch();

  const hiddenFileInput1 = React.useRef(null);
  const hiddenFileInput2 = React.useRef(null);
  const handleClick1 = (event) => {
    hiddenFileInput1.current.click();
  };
  const handleClick2 = (event) => {
    hiddenFileInput2.current.click();
  };

  const playSound = () => {
    alert("hello");
  };

  const pauseSound = () => {
    alert("pause");
  };
  return (
    <div>
      <div>
        <button
          className={classes.play}
          ref={hiddenFileInput1}
          onClick={playSound}
        />
        <button
          className={classes.pause}
          ref={hiddenFileInput2}
          onClick={pauseSound}
        />
        <img src={pause} alt="pause" onClick={handleClick2} />
        <img src={play} alt="play" onClick={handleClick1} />
        <audio controls>
          <source src="../../music/test1.mp3" type="audio/mp3" />
          <p>
            Ваш браузер не поддерживает HTML5 аудио. Вот взамен
            <a href="">ссылка на аудио</a>
          </p>
        </audio>
      </div>
    </div>
  );
};

export default Music;
