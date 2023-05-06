import classes from './User.module.css'
import React from 'react'

class User extends React.Component {

	followToFriends = () => this.props.followToFriend(this.props.users.id)

	render() {
		let followed = { flwtxt: 'follow', class: classes.follow }
		if (this.props.users.follow) {
			followed.flwtxt = "unfollow"
			followed.class = classes.unfollow
		}

		return (
			<div className={classes.user}>
				<div className={classes.avatarinfo}>
					<span className={classes.name}>{this.props.users.name}</span>
					<img className={classes.avatar} src={this.props.users.photos.large || this.props.defoultImage} alt="avatar" />
					<button className={classes.followed + ' ' + followed.class} onClick={this.followToFriends}> {followed.flwtxt} </button>
				</div>
				<div className={classes.description}>
					<div className={classes.status} >{this.props.users.status}</div>
					<div className={classes.location}>
						<span>{'props.users.location.country'}</span>
						<span>{'props.users.location.city'}</span>
					</div>
				</div>
			</div>
		)
	}
}

export default User