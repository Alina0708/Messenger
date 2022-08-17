export const addPost = () => ({ type: "POST-IN-MY-POST" });

export const updatePost = (text) => ({
  type: "POST-IN-STATE",
  stringPost: text,
});
