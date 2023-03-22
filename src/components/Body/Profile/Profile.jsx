import classes from './Profile.module.css'
import React from 'react';
import Posts from './MyPosts/Posts';
import NewPost from './NewPost/NewPost';
import Maincontent from './Maincontent/Maincontent';

const Profile = () => {
  return (
    <main>
      <Maincontent />
      <div>ava + description</div>
      <div>My post</div>
      <NewPost />
      <Posts />
    </main>
  );
}

export default Profile;
