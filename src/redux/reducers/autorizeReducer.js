import { stopSubmit } from "redux-form"
import request from "../../axiosRequest/axiosRequest"
// іціціюю стейт
const initialState = {
	autorizeData: {
		email: null,
		id: null,
		login: null,
		logined: false,
		photo: null,
	},
	errorMessages: '',
	status: null,
	disableButton: false
}

// функція редюсер для створення обєкту ауторізе в стейті, та обробки екшенів
const autorizeReducer = (state = initialState, action) => {
	switch (action.type) {

		// екшн авторизації, встановлює дані авторизованого користувача
		case 'AUTORIZE_SET_DATA':
			return({...state, autorizeData: {...action.data, logined: true}} )
		
			// екшн помилки авторизації
		case 'AUTORIZE_SET_ERROR':
			return ({ ...state, errorMessages: { ...action.errorMessages } } )
			
			// екшн установки статусу
		case 'AUTORIZE_SET_STATUS':
			return ({ ...state, status: action.status } )
			
			// екшн блокування кнопки запиту
		case 'AUTORIZE_DISABLE_BUTTON':
			return ({ ...state, disableButton: action.disableButton } )
		
		// екшн установки фото авторизованого юзера
			case 'AUTORIZE_SET_PHOTO':
			return ({ ...state, autorizeData: { ...state.autorizeData, photo: action.photo } })
		
		// екшн очистки даних
		case 'AUTORIZE_CLEAR_DATA':
			return ({ ...state, autorizeData: action.autorizeData })

		default:
			return state;
	}
}

// функція конструктор екшина для встановленя даних авторизованого користувача
export const autorizeSetData = (data) => ( {type:'AUTORIZE_SET_DATA', data: data} )

// функція конструктор екшина для встановленя повідомлення про помилку
export const autorizeSetError = (errorMessages) => ({ type: 'AUTORIZE_SET_ERROR', errorMessages: errorMessages })

// функція конструктор екшина для встановленя статусу
export const autorizeSetStatus = (status) => ({ type: 'AUTORIZE_SET_STATUS', status: status })


// функція конструктор для встановлення фото авторизованого користувача
export const autorizeSetPhoto = (photoUrl) => ({ type: 'AUTORIZE_SET_PHOTO', photo: photoUrl })


// функція конструктор для встановлення блокування кнопки запиту
export const autorizeDisableButton = (disableButton) => ({ type: 'AUTORIZE_DISABLE_BUTTON', disableButton: disableButton })

// функція конструктор для очищення даних авторизації
export const autorizeClearData = () => ({ type: 'AUTORIZE_CLEAR_DATA', autorizeData: initialState.autorizeData })

// функція санка, робит гет запит на сервер для авторизації,
// в разі успіху діспатчить авторизовані дані в стейт
// і робе запит за статусом авторизованого користувача, та діспатчить дані в стейт
// якщо помилка, діспатчить повідомлення про помилку
export const autorizedMe = () => {
	return (dispatch) => {
		dispatch(autorizeDisableButton(true))
		request.auth.authMe().then(response => {
			if (response.result) dispatch(autorizeSetData(response.data))
			else dispatch(autorizeSetError(response.messages))
			dispatch(autorizeDisableButton(false))
			request.auth.authMeStatus(response.data.id).then(response => {
				dispatch(autorizeSetStatus(response.data))
			})
		})
	}
}

// функція санка, робит пост запит на сервер для авторизації,
// в разі успіху робить гет запит за даними
// і робе запит за статусом авторизованого користувача, та діспатчить дані в стейт
// якщо помилка, діспатчить повідомлення про помилку
export const autorizeMeLogin = (data) => {

	return (dispatch) => {

		request.auth.authMeLogin(data).then(response => {
			if (response.result) dispatch(autorizedMe())
			else {
				dispatch(stopSubmit('loginForm', { showError: response.messages }))
			}
		})
	}
}

// функція санка, робит delete запит на сервер для авторизації,
// в разі успіху очищає дані в стейті

export const autorizeMeLogout = () => {
	return (dispatch) => {
		request.auth.authMeLogout().then(response => {
			if (response.result) dispatch(autorizeClearData())
			else dispatch(autorizeSetError(response.messages))
		})
	}
}

// функція санка, робит пут запит на сервер для заміни статусу,
// в разі успіху діспатчить новий статус в стейт
export const autorizeSetMyStatus = (newStatus) => {
	return (dispatch) => {
		request.auth.authSetMeStatus(newStatus).then(response => {
			if (response) dispatch(autorizeSetStatus(newStatus))
		})
	}
}


// експорт за дефолтом
export default autorizeReducer