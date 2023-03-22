import classes from './NewPost.module.css'
import React from 'react';

const NewPost = () => {
  return (
        <div className={classes.newpost}>
          New post
          <textarea name="" id="" cols="20" rows="3"></textarea>
          <button>Add post</button>
        </div>
  );
}

export default NewPost;
