import React from "react";
import classes from "./Messages.module.css";

const Messages = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.interlocutors}>
        <div className={`${classes.interlocotor} ${classes.active}`}>Alina</div>
        <div className={classes.interlocotor}>Victoria</div>
        <div className={classes.interlocotor}>Sasha</div>
        <div className={classes.interlocotor}>Danik</div>
        <div className={classes.interlocotor}>Dima</div>
      </div>
      <div className={classes.message}>
        <div className={classes.newMwssage}>Hi</div>
        <div className={classes.newMwssage}>What are you doing?</div>
        <div className={classes.newMwssage}>Yo</div>
      </div>
    </div>
  );
};

export default Messages;
