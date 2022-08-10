import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElement = props.postsData.map((post) => (
    <Post message={post.message} likecount={post.likecount} />
  ));

  let newPostLink = React.createRef();
  let addNewPost = () => {
    let text = newPostLink.current.value;
    props.postInMyPost(text);
    debugger;
  };
  return (
    <div className={classes.postBlock}>
      <div>
        <textarea ref={newPostLink}></textarea>
      </div>
      <button onClick={addNewPost}>Add post</button>
      <div>{postElement}</div>
    </div>
  );
};
export default MyPosts;
