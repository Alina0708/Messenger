import React from "react";
import classes from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageInDialog from "./MessageInDialog/MessageInDialog";
import { useDispatch } from "react-redux";

const Messages = (props) => {
  const dispatch = useDispatch();
  const dialogsElement = props.dialogsData.map((dialog, index) => (
    <DialogItem
      key={`dialog${index}`}
      avtorLink={dialog.avtorLink}
      imageAvatar={dialog.imageAvatar}
      avtor={dialog.avtor}
    />
  ));

  const messagesElemet = props.messagesData.map((message, index) => (
    <MessageInDialog key={`messageInDialog${index}`} sms={message.sms} />
  ));

  const newMessageText = props.newMessageText;
  const newMessageElement = React.createRef();

  const onSendMessageClick = () => {
    dispatch({ type: "send-Message" });
  };

  const onChangeMessage = (event) => {
    const text = event.target.value;
    dispatch({ type: "new-Message", myMessage: text });
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
