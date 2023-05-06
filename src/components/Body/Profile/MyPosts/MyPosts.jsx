import classes from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postsItems = props.post.map((post) => {
		return <Post key={post.txtMessage} txtMessage={post.txtMessage} likeCount={post.likeCount} />;
  });
  return (
    <div className={classes.posts}>
      posts
      {postsItems}
    </div>
  );
};

export default MyPosts;
