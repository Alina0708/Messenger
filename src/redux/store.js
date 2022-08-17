import { combineReducers, legacy_createStore as createStore } from "redux";
import messages from "./reducers/messagesReducer";
import posts from "./reducers/postsReducer";
import sidebar from "./reducers/sidebarReducer";

let reducers = combineReducers({
  messages,
  posts,
  sidebar,
});
const store = createStore(reducers);

export default store;
