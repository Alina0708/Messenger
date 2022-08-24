import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPost } from "../../../redux/actions/postsActions";
import { useDispatch } from "react-redux";

const MyPosts = (props) => {
  const dispatch = useDispatch();
  const postElement = props.postsData.map((post) => (
    <Post message={post.message} likecount={post.likecount} />
  ));

  const newPostLink = React.createRef();

  const addNewPost = () => {
    const text = newPostLink.current.value;
    dispatch(addPost({ type: "POST-IN-MY-POST", text: text }));
  };

  const onPostChange = () => {
    const text = newPostLink.current.value;
    dispatch({ type: "POST-IN-STATE", stringPost: text });
  };

  return (
    <div className={classes.postBlock}>
      <div>
        <textarea
          className={classes.textPost}
          onChange={onPostChange}
          ref={newPostLink}
          value={props.newPostText}
          placeholder="Write a post..."
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
