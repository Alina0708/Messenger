export const addPost = () => ({ type: "POST-IN-MY-POST" });

export const updatePost = (text) => ({
  type: "POST-IN-STATE",
  stringPost: text,
});

export const filmsLoad = (data) => ({
  type: "GET_FILMS",
  payload: {
    films: data,
  },
});
