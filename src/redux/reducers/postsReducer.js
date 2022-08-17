let initialState = {
  postsData: [
    {
      message:
        "Theory is when everything is known, but nothing works. Practice is when everything works, but no one knows why",
      likecount: "25",
    },
    {
      message: "If you suffer for a long time, something will work out",
      likecount: "30",
    },
  ],
  newPostText: "post",
};
const myPostPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST-IN-MY-POST":
      let newPost = {
        message: state.newPostText,
        likecount: 22,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: "",
      };
    case "POST-IN-STATE":
      return { ...state, newPostText: action.stringPost };
    default:
      return state;
  }
};

export default myPostPageReducer;
