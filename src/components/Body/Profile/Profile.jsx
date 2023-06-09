// імпортую необхідні компоненти
// import classes from './Profile.module.css'
import React from 'react';
import NewPostConteiner from './NewPost/NewPostConteiner';
import Maincontent from './Maincontent/Maincontent';
import MyPostsConteiner from './MyPosts/MyPostsConteiner';
import ProfileInfoConteiner from './ProfileInfo/ProfileInfoConteiner';
import { connect } from 'react-redux';

// функція компоненти
const Profile = (props) => {

  return (
    <main>
			{/* мейнконтент, можливо буде щось про мене там */}
      <Maincontent />

			{/* копонента з даними переглядаючого профіля */}
			<ProfileInfoConteiner />

			{/* компонента для нових постів */}
      <NewPostConteiner />

			{/* компонента з постами */}
      <MyPostsConteiner />
    </main>
  );
}
// експорт по дефолту
// функція мапстейттупропс, для прокидання даних стейту через конект
const mapStateToProps = () => {
	return({

	})
}
// прокидаю в компоненту профайл дані зі стора
export default connect(mapStateToProps, { })(Profile);
