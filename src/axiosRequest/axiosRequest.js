// компонента з методами запитів аксіос
// імпортую необхідні компоненти
import axios from "axios";

// на скільки я розумію, створюю новий клас на базі аксіос, куди передаю в функцію конструктор дані які будуть використовуватися за замовчуванням, тепер цей клас використовую замість бібліотеки аксіос
const requestSamurai = axios.create(
	{
		withCredentials: true,
		baseURL: 'https://social-network.samuraijs.com/api/1.0/',
		headers: {},
	}
)

// обєкт із запитами
const request = {

	// запити на фоллоу, 3 типу для підписки відписки на перевірки
	followed: {

		// запит для перевірки на підписку, перевіряє підписку по ід, повертає проміс який повертає значення тру фолс
		isFollow( id ) {
			return requestSamurai.get(`follow/${id}`).then(response => response.data)
		},

		// запит для підписку на юзера по ід, повертає проміс, який повертає обєкт зі значеннями
		// result: тру фолс значення чи успішно підписалися
		// falseMessages: якщо result = false то передасть повідомлення помилки
		follow(id) {
			return requestSamurai.post(`follow/${id}`)
				.then(response => ({
					result: response.data.resultCode === 0 ? true : false,
					falseMessages: response.data.data.messages,
				})
				)
		},

		// запит для відписку на юзера по ід, повертає проміс, який повертає обєкт зі значеннями
		// result: тру фолс значення чи успішно підписалися
		// falseMessages: якщо result = false то передасть повідомлення помилки
		unfollow(id) {
			return requestSamurai.delete(`follow/${id}`)
				.then(response => ({
					result: response.data.resultCode === 0 ? true : false,
					falseMessages: response.data.data.messages,
				})
			)
		},
	},

	// гет запит на отримання списку користувачів
	users: {
		// гет запит, приймає в параметри 
		// юзеркаунт - кількість юзерів на сторінці
		// пейжнамбер - номер сторінки
		// повертає проміс, який повертає обєкт, з масивом юзерів, та змінну з загальною кількістю сторінок
		getUsers(usersCount, pageNumber) {
			return requestSamurai.get(`users?count=${usersCount}&page=${pageNumber}`).then(response => ({ users: response.data.items, totalCount: response.data.totalCount }))
		},
	},

	// запити на профіль, авторизаці, видалення та редагування
	auth: {
		// гет запит, на авторизацію, повертає проміс з обєктом
		// якщо успішно, резальт = тру, дата = дані 
		// якщо не успішно, резальт = фолс, меседж = повідомлення про помилку
		authMeLogin() {
			return requestSamurai.get(`auth/me`).then(response => {
				if (response.data.resultCode === 0) return ({ result: true, data: response.data.data })
				else return ({ result: false, messages: response.data.messages })
			})
		},

		// гет запит, на отримання статусу, повертає проміс з обєктом
		// дата = дані 
		authMeStatus(id) {
			return requestSamurai.get(`profile/status/${id}`).then(response => {
				return ({ data: response.data })
			})
		},

		// пут запит, на оновлення статусу, повертає проміс із значенням тру фолс
		// в залежності від успіху пут запиту
		authSetMeStatus(status) {
			return requestSamurai.put(`profile/status`, {status: status} ).then(response => {
				if (response.data.resultCode === 0) return true
				else return false
			})
		},

	}
}

export default request