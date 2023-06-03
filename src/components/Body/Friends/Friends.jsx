// імпортую необхідні компоненти
import classes from "./Friends.module.css";
import React from 'react';
import User from './User/User'
import NumberList from "./NavList/NumberList";

// створюю класову компоненту Friends, 
class Friends extends React.Component {
	// метод класової компоненти, який відпрацює при створені компоненти
	componentDidMount() {
		this.getUsers(this.props.activePage)
	}

	// метод компоненти, який діспатчить функцію санку, яка зробе запит на сервер і загрузить в стейт список юзерів? а також створить список сторінок для навігації
	getUsers = (pageNumber) => {
		this.props.usersGetList(this.props.usersCount, pageNumber)
	}

	// метод, для підписки відписки від користувача, та загрузки оновлених даних
	followedToUser = (id, follow) => {
		this.props.usersFollowedToUser(id, follow)
		// this.getUsers(this.props.activePage)
	}

	// метод рендер
	render() {
		// масив юзерліст, в якому формую компоненти юзер
		const userList = this.props.users.map((user) => (<User key={user.id} users={user} defoultImage={this.props.defoultImage} usersSetState={this.props.usersSetState} loaded={this.props.loaded} followedToUser={this.followedToUser} />))

		// це вбудована компонента з лоадером
		let loader = []
		for (let i = 0; i < 10; i++) {
			loader[i] = <div 
				key={i} 
				className={classes.loaderItems}
				style={{ transform: `rotate(${360 / 10 * i }deg)`}} 
			>
			</div>
		}

		// повертаю жсх
		return (
			<div>
				{/* френди, відображаються завжди */}
				<div className={classes.pageCount}>
					<div> Friends </div>
				</div>

				{this.props.loaded
				// якщо іде запит на сервер, відображаю компоненту лоадер
				? <div className={classes.loaded}>
						{loader}
				</div> 
				// коли запит завершився, відображаю юзерів
				: <div className={classes.userlist}>
					<div>
							<NumberList activePage={this.props.activePage}
								usersCount={this.props.usersCount}
								getUsers={this.getUsers}
								pageCount={this.props.pageCount}
								maxDisplayedPageCount={this.props.maxDisplayedPageCount}
								usersSetPageNumberList={this.props.usersSetPageNumberList}
								pageNumberList={this.props.pageNumberList} />
					</div>
					{/* масив юзерів */}
					{userList}
				</div>}
			</div>
		);
	}
};
// експортую компоненту по дефолту
export default Friends;
