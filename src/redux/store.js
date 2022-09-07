import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
  compose
} from "redux";
import thunk from "redux-thunk";

import messages from "./reducers/messagesReducer";
import posts from "./reducers/postsReducer";
import sidebar from "./reducers/sidebarReducer";
import films from "./reducers/filmsReducer";
import music from "./reducers/musicReducers";

let reducers = combineReducers({
  messages,
  posts,
  sidebar,
  films,
  music
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);
const store = createStore(reducers, enhancer);

export default store;
