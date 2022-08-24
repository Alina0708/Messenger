const initialState = {
  films: [],
};

const filmsReducer = (state = initialState, action) => {
  console.log("resuxer", state, action.type, action.payload);
  switch (action.type) {
    case "GET_FILMS":
      console.log("case");
      return {
        ...state,
        films: action.payload.films,
      };
    default:
      return state;
  }
};

export default filmsReducer;
