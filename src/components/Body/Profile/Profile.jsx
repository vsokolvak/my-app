import classes from './Profile.module.css'
import React from 'react';
import NewPostConteiner from './NewPost/NewPostConteiner';
import Maincontent from './Maincontent/Maincontent';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import MyPostsConteiner from './MyPosts/MyPostsConteiner';

const Profile = (props) => {
  return (
    <main>
      <Maincontent />
      <ProfileInfo />
      <NewPostConteiner />
      <MyPostsConteiner />
    </main>
  );
}

export default Profile;
