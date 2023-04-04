import classes from "./Messages.module.css";
import React from "react";
import User from "./User/User";
import Message from "./Message/Message";
import NewMessage from "./NewMessage/NewMessage";

const Messages = (props) => {

  const usersitems = props.messages.users.map((el) => {
    return <User name={el.name} id={el.id} avatar={el.avatar} />;
  });

  const messageitems = props.messages.message.map((el) => {
    return <Message textMessage={el.textMessage} likesCount={el.likesCount} />;
  });

  return (
    <div className={classes.box}>
      <div className={classes.users}>
        <p> users </p>

        {usersitems}
      </div>
      <div div className={classes.messages}>
        <p> messages </p>

        {messageitems}

        <NewMessage />

      </div>
    </div>
  );
};

export default Messages;
