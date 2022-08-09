import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElement = props.postsData.map((post) => 
    <Post message={post.message} likecount={post.likecount} />
  );

  return (
    <div className={classes.postBlock}>
      <div>
        <textarea></textarea>
      </div>
      <button>Add post</button>
      <div>{postElement}</div>
    </div>
  );
};
export default MyPosts;
