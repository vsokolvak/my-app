import classes from "./Message.module.css";
import React from 'react';

const Message = (props) => {
  return (
    <div className={classes.message}>
      <p> {props.textMessage} </p>
    </div>
  );
};

export default Message;
