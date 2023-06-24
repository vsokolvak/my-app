// імпортую необхідні компоненти
// import classes from "./ProfileInfo.module.css";
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';
import { profileFollowedToUser, profileGetUserData } from '../../../../redux/reducers/profileReducer';
import { compose } from 'redux';
import { useParams } from 'react-router-dom';

// створюю класову компоненту контейнер, для компоненти профіля
const ProfileInfoConteiner = props => {

	// беру із рядка адреси айді юзера
	const userId = useParams().userId || 2


	// виконує запит на сервер по ід користувача, якщо ід зміниться, виконає новий запит
	useEffect( () => {
		props.profileGetUserData(userId)
	}, [ userId ] )

	// const profileGetUserData = () => props.profileGetUserData(props.currentId)

	// пвертаю жсх
	return(
		<ProfileInfo {...props} />
	)
}

// функція для прокидання даних зі стейту в пропси через функцію конект
const mapDispatchToProps = (state) => ({
	currentProfile: state.profile.currentProfile,
	currentId: state.profile.currentId,
	follow: state.profile.follow,
	disableButtonFollow: state.profile.disableButtonFollow,
	})

// експортую за замовчуванням компоненту контейнерну, яка описана через клас
export default compose(connect(mapDispatchToProps, { profileFollowedToUser, profileGetUserData }))(ProfileInfoConteiner)
