import classes from './Messages.module.css'
import React from 'react';
import User from './User/User';
import Message from './Message/Message';

const Messages = () => {
  return (
    <div className={classes.box}>
      <div className={classes.users}>
        <p> users </p>
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
      <div div className={classes.messages}>
        <p> messages </p>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    </div>
  );
}

export default Messages;
