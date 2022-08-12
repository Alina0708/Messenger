import React from "react";
import classes from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageInDialog from "./MessageInDialog/MessageInDialog";

const Messages = (props) => {
  let dialogsElement = props.dialogsData.map((dialog) => (
    <DialogItem
      avtorLink={dialog.avtorLink}
      imageAvatar={dialog.imageAvatar}
      avtor={dialog.avtor}
    />
  ));

  let messagesElemet = props.messagesData.map((message) => (
    <MessageInDialog sms={message.sms} />
  ));

  let newMessageText = props.newMessageText;
  let newMessageElement = React.createRef();

  let onSendMessageClick = () => {
    props.dispatch({ type: "send-Message" });
  };

  let onChangeMessage = (event) => {
    let text = event.target.value;
    props.dispatch({ type: "new-Message", myMessage: text });
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.interlocutors}>{dialogsElement}</div>
      <div className={classes.message}>
        <div>{messagesElemet}</div>
        <div>
          <div>
            <textarea
              onChange={onChangeMessage}
              ref={newMessageElement}
              className={classes.textareaMessage}
              placeholder="Enter you message..."
              value={newMessageText}
            />
          </div>
          <div>
            <button
              onClick={onSendMessageClick}
              className={classes.buttonAddMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
