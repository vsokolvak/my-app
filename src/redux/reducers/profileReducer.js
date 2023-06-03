import request from "../../axiosRequest/axiosRequest"
// дані для формування стейту
const initialState = {
	// профіль користувача, загрузится по ід
	currentProfile: null,
	// ід користувача, чий профіль переглядаємо
	currentId: 2,
	// змінна фолоу, показує чи ми підписані на активного користувача
	follow: null,
	// змінна, яка при запиті на підписку відписку деактивує кнопку підписки
	disableButtonFollow: false,
}

// функція редюсер, для обробки дій користувача
const reducer = (data = initialState, action) => {

	// головний метод світч типу запиту
	switch (action.type) {

		// додавання в стейт даних користувача
		case "GET_PROFILE_DATA": {
			return { ...data, currentProfile: action.profile }
		}
		case "SET_PROFILE_ID": {
			return { ...data, currentId: action.id }
		}
		case "SET_PROFILE_FOLLOW": {
			return { ...data, follow: action.follow }
		}
		case "PROFILE_DISABLE_BUTTON_FOLLOW": {
			return { ...data, disableButtonFollow: action.disableButtonFollow }
		}

		// за замовчанням повертаю дані, якщо вони не змінювалися, необхідно для ініціалізації стейту
		default:
			return data;
	}
}

// екшн кріейтер для дії додавання даних користувача в стейт, потрібен для створення контейнерної компоненти через конект
export const profileSetData = (profile) => ({
		type: "GET_PROFILE_DATA",
		profile: profile,
	})

// екшн кріейтер для встановлення ід користувача
export const profileSetId = (id) => ({
	type: "SET_PROFILE_ID",
	id: id,
})

// екшн кріейтер для встановлення даних фолоу для користувача
export const profileSetFollow = (follow) => ({
	type: "SET_PROFILE_FOLLOW",
	follow: follow,
})

// екшн кріейтер для встановлення даних на блокування кнопки
export const profileDisableButtonFollow = (disableButtonFollow) => ({
	type: "PROFILE_DISABLE_BUTTON_FOLLOW",
	disableButtonFollow: disableButtonFollow,
})

// функція thank приймає параметри ід юзера та булеве значення фолоу
// в залежності від значення фолоу робить запит на сервер,
// для підписки або відписки від користувача по ід
// а також, поки йде запит змінній для блоку кнопки задає значення тру
// діспатчить новий статус підписки
export const profileFollowedToUser = ( id, follow ) => {
  
	return (dispatch) => {
		if (!follow) {
			dispatch(profileDisableButtonFollow(true))
			request.followed.follow(id).then(response => {
				dispatch(profileSetFollow(true))
				dispatch(profileDisableButtonFollow(false))
			})
		} 
		else {
			dispatch(profileDisableButtonFollow(true))
			request.followed.unfollow(id).then(response => {
				dispatch(profileSetFollow(false))
				dispatch(profileDisableButtonFollow(false))
			})
		}
		
	}
}

// експортую за замовчуванням редюсер
export default reducer