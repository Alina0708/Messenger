import classes from "./Modal.module.css";
import React from "react";

const Modal = ({ setActive, children }) => {
  console.log("modal");
  return (
    <div className={classes.wrapperModel} onClick={() => setActive(false)}>
      <div
        className={classes.contentModel}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes.closeModel} onClick={() => setActive(false)} />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
