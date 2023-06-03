// імпортую необхідні компоненти
import { connect } from 'react-redux';
import Friends from './Friends';
import { usersSetState, usersSetPageNumberList, usersGetList, usersFollowedToUser } from '../../../redux/reducers/usersReducer';
import { compose } from 'redux';

// формую пропси для функції конект
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

// конекчу компоненту френдс до контейнерної компоненти 
const FriendsConteiner = compose(connect(mapStateToProps, { usersSetState, usersSetPageNumberList, usersGetList, usersFollowedToUser } ))(Friends)
// експортую по дефолту
export default FriendsConteiner;
