import classes from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postsItems = props.posts.map((post) => {
    return <Post txtMessage={post.txtMessage} likeCount={post.likeCount} />;
  });
  return (
    <div className={classes.posts}>
      posts
      {postsItems}
    </div>
  );
};

export default MyPosts;
