import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {postInMyPost, postInState} from "./redux/State";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let renderEntireTree = (state) => {
    
    root.render(
      <React.StrictMode>
        <App state={state} postInMyPost={postInMyPost} postInState={postInState} />
      </React.StrictMode>
    );
  };
