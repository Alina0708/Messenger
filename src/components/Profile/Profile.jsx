import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          src="https://kartinkin.net/uploads/posts/2021-07/1625865940_33-kartinkin-com-p-estetichnie-kavai-oboi-krasivie-34.jpg"
          className={classes.pageSky}
        />
      </div>
      <div>Ava + discreption</div>
      <MyPosts/>
    </div>
  );
};

export default Profile;
