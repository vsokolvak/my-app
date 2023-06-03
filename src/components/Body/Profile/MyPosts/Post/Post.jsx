import classes from './Post.module.css'
import React from 'react';

const Post = (props) => {
  let txtMessage = props.txtMessage || 'defoultMessage'
  let likeCount = props.likeCount || 0
  return (
    <div className={classes.post}>
      <img
        src="https://i.guim.co.uk/img/media/88f6b98714035656cb18fb282507b60e82edb0d7/0_57_2560_1536/master/2560.jpg?width=700&quality=85&dpr=1&s=none"
        alt="img"
      />
      <p>{txtMessage}</p>
      <span>like {' ' + likeCount}</span>
    </div>
  );
}

export default Post;
