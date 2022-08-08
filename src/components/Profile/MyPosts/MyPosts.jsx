import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

  let postsData = [
    {message:'Theory is when everything is known, but nothing works. Practice is when everything works, but no one knows why', likecount:'25'},
    {message:'If you suffer for a long time, something will work out', likecount:'30'}
  ];

  let postElement = postsData.map((post)=> <Post
  message={post.message}
  likecount={post.likecount}
/>);

  return (
    <div className={classes.postBlock}>
      <div>
      <textarea></textarea>
      </div>
      <button>Add post</button>
      <div>
      {postElement}
      </div>
    </div>
  );
};
export default MyPosts;
