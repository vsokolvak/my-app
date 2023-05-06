import classes from "./Friends.module.css";
import React from 'react';
import User from './User/User'
import axios from 'axios'

class Friends extends React.Component {

	componentDidMount() {
		this.getUsers(this.props.activePage)
	}

	getUsers(pageCount) {
		this.props.axiosGetLoaded(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersCount}&page=${pageCount}`).then(response => {
			this.props.setUserState(response.data.items, response.data.totalCount, pageCount)
			this.setPageNumberList(pageCount)
			this.props.axiosGetLoaded(false)
		})
	}
	setPageNumberList(pageCount) {
		let pageNumberList = []
		let j = (this.props.pageCount < this.props.maxDisplayedPageCount ? this.props.pageCount : this.props.maxDisplayedPageCount)
		let k = (pageCount === 1 ? pageCount : pageCount - 1)
		if (pageCount === this.props.pageCount) k = k - 1
		for (let i = 0; i < j; i++) {
			pageNumberList[i] = k
			k = k + 1
		}
		this.props.setPageNumberList(pageNumberList)
	}

	render() {
		const userList = this.props.users.map((user) => (<User key={user.id} users={user} defoultImage={this.props.defoultImage} followToFriend={this.props.followToFriend} setUserState={this.props.setUserState} />))

		const pageList =
			this.props.pageNumberList.map((el) => {
				return (
					<span key={el} className={(el === this.props.activePage ? classes.activePageNumber : '') + ' ' + classes.pageNumber}
						onClick={() => { this.getUsers(el) }}>
						{el}
					</span>
				)
			})
		let startStyleNone = {}
		if (this.props.activePage <= 2) startStyleNone.display = 'none'

		let endStyleNone = {}
		if (this.props.activePage >= this.props.pageCount - 1) endStyleNone.display = 'none'

		let loader = []
		for (let i = 0; i < 10; i++) {
			loader[i] = <div 
				key={i} 
				className={classes.loaderItems}
				style={{ transform: `rotate(${360 / 10 * i }deg)`}} 
			>
			</div>
		}

		return (
			<div>
				<div className={classes.pageCount}>
					<div> Friends </div>
				</div>

				{this.props.loaded 
				? <div className={classes.loaded}>
						{loader}
				</div> 
				: <div className={classes.userlist}>
					<div>
						<span
							className={classes.pageNumber}
							style={startStyleNone}
							onClick={() => { this.getUsers(1) }}>
							1 ...
						</span>
						{pageList}
						<span className={classes.pageNumber}
							style={endStyleNone}
							onClick={() => { this.getUsers(this.props.pageCount) }} >
							... {this.props.pageCount}</span>
					</div>
					{userList}
				</div>}
			</div>
		);
	}
};

export default Friends;
