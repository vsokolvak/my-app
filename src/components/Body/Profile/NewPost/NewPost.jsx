import classes from "./NewPost.module.css";
import React from "react";

const NewPost = (props) => {
  let newPostElement = React.createRef();

  const addTxt = () => {
    let text = newPostElement.current.value;
    props.bll.updateInputMessage(text);
  };

  const addPost = () => {
    props.bll.updatePosts(props.inputMessage);
    props.bll.updateInputMessage("");
  };

  return (
    <div className={classes.newpost}>
      New post
      <textarea
        onChange={addTxt}
        ref={newPostElement}
        value={props.inputMessage}
        name=""
        id=""
        cols="20"
        rows="3"
      ></textarea>
      <button onClick={addPost}>Add post</button>
    </div>
  );
};

export default NewPost;
