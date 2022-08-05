import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <textarea></textarea>
      <button>Add post</button>
      <div>
        <Post message="Theory is when everything is known, but nothing works. Practice is when everything works, but no one knows why" likecount="25" />
        <Post message="If you suffer for a long time, something will work out" likecount="30"/>
      </div>
    </div>
  );
};
export default MyPosts;
