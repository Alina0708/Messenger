import React from "react";
import classes from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageInDialog from "./MessageInDialog/MessageInDialog";

const Messages = () => {
  let dialogsData = [
    { avtorLink: 1, avtor: "Alina" },
    { avtorLink: 2, avtor: "Victoria" },
    { avtorLink: 3, avtor: "Alexsander" },
    { avtorLink: 4, avtor: "Dima" },
    { avtorLink: 5, avtor: "Danik" },
  ];
  let dialogsElement = dialogsData.map((dialog) => (
    <DialogItem avtorLink={dialog.avtorLink} avtor={dialog.avtor} />
  ));
  let messagesData = [
    { sms: "Hi" },
    { sms: "How are you?" },
    { sms: "Where are you" },
  ];

  let messagesElemet = messagesData.map((message) => (
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
