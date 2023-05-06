import { connect } from 'react-redux';
import Friends from './Friends';

const mapStateToProps = state => ({ 
	users: state.users.users, 
	defoultImage: state.users.defoultImage,
	axiosParams: state.users.axiosParams,
	pageNumberList: state.users.pageNumberList,
	pageCount: state.users.axiosParams.pageCount,
	activePage: state.users.axiosParams.activePage,
	usersCount: state.users.axiosParams.usersCount,
	maxDisplayedPageCount: state.users.axiosParams.maxDisplayedPageCount,
	loaded: state.users.axiosParams.loaded
 })

const mapDispatchToProps = dispatch => {
	return ({
		followToFriend(id) {
			dispatch({
				type: 'FOLLOWED',
				id: id,
			})
		},
		setUserState(data, pageCount, activePage) {
			dispatch({
				type: 'SET_USER_STATE',
				data: data,
				pageCount: pageCount,
				activePage: activePage,
			})
		},
		setPageNumberList(pageNumberList) {
			dispatch({
				type: 'SET_PAGE_NUMBER_LIST',
				pageNumberList: pageNumberList,
			})
		},
		axiosGetLoaded(loaded) {
			dispatch({
				type: 'AXIOS_GET_LOADED',
				loaded: loaded,
			})
		}
	})
}

const FriendsConteiner = connect(mapStateToProps, mapDispatchToProps)(Friends)


export default FriendsConteiner;
