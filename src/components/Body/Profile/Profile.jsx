import classes from './Profile.module.css'
import React from 'react';
import NewPost from './NewPost/NewPost';
import Maincontent from './Maincontent/Maincontent';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
  return (
    <main>
      <Maincontent />
      <ProfileInfo />
      <NewPost bll={props.bll} inputMessage={props.state.inputMessage} />
      <MyPosts posts={props.state.posts} />
    </main>
  );
}

export default Profile;
