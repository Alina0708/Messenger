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
    props.dispatch({ type: "POST-IN-MY-POST" });
  };

  let onPostChange = () => {
    let text = newPostLink.current.value;
    props.dispatch({ type: "POST-IN-STATE", stringPost: text });
  };

  return (
    <div className={classes.postBlock}>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostLink}
          value={props.newPostText}
          placeholder="write a post..."
        />
      </div>
      <button onClick={addNewPost} className={classes.buttonAddPost}>
        Add post
      </button>
      <div>{postElement}</div>
    </div>
  );
};
export default MyPosts;
