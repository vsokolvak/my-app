import React from "react";
import classes from "./NewMessage.module.css";

const NewMessage = (props) => {

  let newMessageItem = React.createRef()

  let sendMessage = () => {
    let txt = newMessageItem.current.value
    alert(txt);
  }

  return (
    <div className={classes.newMessage}>
      <textarea
        ref={newMessageItem}
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>

      <button onClick={sendMessage}>send message</button>
    </div>
  );
};

export default NewMessage;
