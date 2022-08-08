import React from "react";
import classes from "./MessageInDialog.module.css";

const MessageInDialog = (props) => {
  return <div className={classes.newMessage}>{props.sms}</div>;
};

export default MessageInDialog;
