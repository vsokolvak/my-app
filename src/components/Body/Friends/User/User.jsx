// імпортую необхідні компоненти
import { NavLink } from 'react-router-dom'
import classes from './User.module.css'
import React from 'react'
import FollowConteiner from '../../../../reusedComponent/Follow/FollowConteiner'

// створюю класову компоненту
class User extends React.Component {

	// метод рендер
	render() {
		// змінна для елемента фоловед
		let followed = { flwtxt: 'follow', class: classes.follow }

		// перемикаю дані, якщо підписані на юзера
		if (this.props.users.followed) {
			followed.flwtxt = "unfollow"
			followed.class = classes.unfollow
		}

		// повертаю жсх
		return (
			// головний блок
			<div className={classes.user}>
				{/* блок з інформацією про користувача, імя аватарка та підписка */}
				<div className={classes.avatarinfo}>
					{/* ссилка на профіль користувача*/}
					<NavLink to={`/profile/${this.props.users.id}`}>
						{/* блок з імям користувача */}
						<span className={classes.name}>{this.props.users.name}</span>
						{/* аватарка користувача, якщо відсутня підставиться дефолтна аватарка */}
						<img className={classes.avatar} src={this.props.users.photos.large || this.props.defoultImage} alt="avatar" />
					</NavLink>

					<FollowConteiner id={this.props.users.id} follow={this.props.users.followed} disabled={this.props.users.followButtonDisable} followedToUser={this.props.followedToUser } />
				
				</div>
				{/* блок опису користувача */}
				<div className={classes.description}>
					{/* блок в якому показано статус користувача */}
					<div className={classes.status} >{this.props.users.status}</div>
					{/* блок з локацією користувача, здається він взагалі не потрібний */}
					<div className={classes.location}>
						<span>{'props.users.location.country'}</span>
						<span>{'props.users.location.city'}</span>
					</div>
				</div>
			</div>
		)
	}
}
// експортую по дефолту
export default User