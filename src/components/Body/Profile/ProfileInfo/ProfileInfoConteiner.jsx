// імпортую необхідні компоненти
// import classes from "./ProfileInfo.module.css";
import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';
import { profileSetData, profileSetFollow, profileSetId, profileFollowedToUser } from '../../../../redux/reducers/profileReducer';
import request from '../../../../axiosRequest/axiosRequest';
import { compose } from 'redux';

// створюю класову компоненту контейнер, для компоненти профіля
class ProfileInfoConteiner extends React.Component {

	// при створені компоненти виконати запит на сервер за даними конкретного профіля

	componentDidMount() {
		this.getProfileInfo(this.props.currentId)
		this.isFollowed(this.props.currentId)
	}

	// метод компоненти, для запиту на сервер
	getProfileInfo = (id) => {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then((Response) => {this.props.profileSetData(Response.data)})
	}

	// метод для перевірки чи підписані на даного користувача
	isFollowed = (id) => {
		request.followed.isFollow(id).then(response => {
			this.props.profileSetFollow(response)
		})

	}

	// метод компоненти рендер
	render() {

		// повертаю жсх розмітку
		return(
			<ProfileInfo {...this.props} rerender={this.rerender} />
		)
	}
}

// функція для прокидання даних зі стейту в пропси через функцію конект
const mapDispatchToProps = (state) => ({
	currentProfile: state.profile.currentProfile,
	currentId: state.profile.currentId,
	follow: state.profile.follow,
	disableButtonFollow: state.profile.disableButtonFollow,
	})

// експортую за замовчуванням компоненту контейнерну, яка описана через клас
export default compose(connect(mapDispatchToProps, { profileSetData, profileSetFollow, profileSetId, profileFollowedToUser }))(ProfileInfoConteiner)
