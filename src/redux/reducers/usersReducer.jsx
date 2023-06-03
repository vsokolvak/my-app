
import request from "../../axiosRequest/axiosRequest"
// дані для формування стейта в редаксі
const initialState = {
	users: [
		{
			name: null,
			id: null,
			photos: {
				small: null,
				large: null
			},
			status: null,
			followed: false,
			followButtonDisable: false
		}
	],
	defoultImage: 'https://w7.pngwing.com/pngs/444/107/png-transparent-avatar-female-portrait-woman-avatars-xmas-giveaway-icon-thumbnail.png',
	axiosParams: {
		usersCount: 5,
		activePage: 1,
		pageCount: 1,
		maxDisplayedPageCount: 3,
		loaded: true,
	},

	pageNumberList: [],
}
// функція-редюсер, формує стейт в обєкт месседж, та діспачить запити до нього
const usersReducer = (data = initialState, action) => {

	// обробляю діспатчі
	switch (action.type) {

		case 'SET_USER_STATE':

			return { ...data, users: [...action.users], axiosParams: {...data.axiosParams, pageCount: action.pageCount, activePage: action.activePage} }
		
		case 'SET_PAGE_NUMBER_LIST':

			return { ...data, pageNumberList: [...action.pageNumberList] }

		case 'AXIOS_GET_LOADED':

			return { ...data, axiosParams: { ...data.axiosParams, loaded: action.loaded } }

		case 'USERS_FOLLOW_BUTTON_DISABLE':
			
			return {
				...data,
				users: data.users.map(user => {
					if (user.id === action.userId) {
						return {
							...user,
							followButtonDisable: action.followButtonDisable
						};
					}
					return user;
				})
			};

		case 'USERS_SET_FOLLOW':
			
			return {
				...data,
				users: data.users.map(user => {
					if (user.id === action.id) {
						return {
							...user,
							followed: action.follow
						};
					}
					return user;
				})
			};

		default:
		
		return data

	}
}

// екшн кріейтер, діспатчить в стейт масив юзерів, які прийшли із запиту,
// пейжкаунт, вираховує кількість сторінок юзерів, ділить кількість юзерів, на кількість юзерів на сторінці, та встановлює активну сторінку,
// я обєднав 3 діспатча, тому що це все рахується по результатам запиту
export const usersSetState = (users, pageCount, activePage) => { 
	return (
		{
			type: 'SET_USER_STATE',
			users: users,
			pageCount: pageCount,
			activePage: activePage,
		}
	)
}

export const usersSetPageNumberList = (pageNumberList) => {
 	return (
		{
			type: 'SET_PAGE_NUMBER_LIST',
			pageNumberList: pageNumberList,
		}
	)
}

export const usersAxiosGetLoaded = (loaded) => {
	return({
		type: 'AXIOS_GET_LOADED',
		loaded: loaded,
	})
}

export const usersFollowButtonDisable = (userId, disable) => {
	return ({
		type: 'USERS_FOLLOW_BUTTON_DISABLE',
		followButtonDisable: disable,
		userId: userId,
	})
}
export const usersSetFollow = (id, follow) => {
	return ({
		type: 'USERS_SET_FOLLOW',
		id: id,
		follow: follow,
	})
}

// функція thank
// робить запит на сервер, для отримання списку користувачів
// приймає параметри 
// юзеркаунт - кількість юзерів на сторінці
// пейжнамбер - номер сторінки

export const usersGetList = (userCount, pageNumber) => {

	return (dispatch) => {
		
		dispatch(usersAxiosGetLoaded(true))
		request.users.getUsers(userCount, pageNumber).then(response => {
			dispatch(usersSetState(response.users, Math.ceil(response.totalCount / userCount), pageNumber ))
			dispatch(usersAxiosGetLoaded(false))
		})
	}
}

// функція thank приймає параметри ід юзера та булеве значення фолоу
// в залежності від значення фолоу робить запит на сервер,
// для підписки або відписки від користувача по ід
// а також, поки йде запит змінній для блоку кнопки задає значення тру
// якщо запит успішний, діспатчить нове значення фолоу в стейт
export const usersFollowedToUser = (id, follow) => {

	return (dispatch) => {
		if (!follow) {
			dispatch(usersFollowButtonDisable(id, true))
			request.followed.follow(id).then(response => {
				if (response.result) dispatch(usersSetFollow(id, true))
				dispatch(usersFollowButtonDisable(id, false))
			})
		}
		else {
			dispatch(usersFollowButtonDisable(id, true))
			request.followed.unfollow(id).then(response => {
				if (response.result) dispatch(usersSetFollow(id, false))
				dispatch(usersFollowButtonDisable(id, false))
			})
		}
	}
}

// експорт за замовчуванням
export default usersReducer