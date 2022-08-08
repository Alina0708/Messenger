import React from "react";
import classes from "./ProfileInfo.module.css";
const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://kartinkin.net/uploads/posts/2021-07/1625865940_33-kartinkin-com-p-estetichnie-kavai-oboi-krasivie-34.jpg"
          className={classes.pageSky}
        />
      </div>
      <div className={classes.discreptionBlock}>Ava + discreption</div>
    </div>
  );
};

export default ProfileInfo;
