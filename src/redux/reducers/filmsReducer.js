const initialState = {
  films: [],
};

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FILMS":
      console.log("case");
      return {
        // ...state,
        films: action.payload.films,
      };
    default:
      return state;
  }
};

export default filmsReducer;
