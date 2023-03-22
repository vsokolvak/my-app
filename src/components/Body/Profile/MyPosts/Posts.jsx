import classes from './Posts.module.css'
import React from 'react';
import Post from './Post/Post';

const Posts = () => {
  return (
    <div className={classes.posts}>
      posts
      <Post txtMessage="this is post 1" likeCount="23" />
      <Post txtMessage="this is post 2" likeCount="56" />
      <Post />
    </div>
  );
}

export default Posts;
