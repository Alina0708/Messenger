import React from "react";
import classes from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageInDialog from "./MessageInDialog/MessageInDialog";

const Messages = (props) => {

  let dialogsElement = props.dialogsData.map((dialog) => (
    <DialogItem avtorLink={dialog.avtorLink} imageAvatar={dialog.imageAvatar} avtor={dialog.avtor}/>
  ));

  let messagesElemet = props.messagesData.map((message) => (
    <MessageInDialog sms={message.sms} />
  ));
  return (
    <div className={classes.dialogs}>
      <div className={classes.interlocutors}>{dialogsElement}</div>
      <div className={classes.message}>{messagesElemet}</div>
    </div>
  );
};

export default Messages;
