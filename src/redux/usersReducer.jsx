// дані для формування стейта в редаксі
const initialState = {
	users: [],
	defoultImage: 'https://w7.pngwing.com/pngs/444/107/png-transparent-avatar-female-portrait-woman-avatars-xmas-giveaway-icon-thumbnail.png',
	axiosParams: {
		usersCount: 5,
		activePage: 1,
		pageCount: 1,
		maxDisplayedPageCount: 3,
	},

	pageNumberList: [],
}
// функція-редюсер, формує стейт в обєкт месседж, та діспачить запити до нього
const usersReducer = (data = initialState, action) => {
	// роблю копію стейта, для відловлювання змін і роботи в реакт редакс
	let stateCopy = { ...data }
	// обробка запиту для типу UPDATE-INPUT-TEXT
	if (action.type === 'FOLLOWED') {
		stateCopy.users = [
			...data.users.map(user => {
				if (user.id === action.id) {
					if (user.follow) return ({ ...user, follow: false })
					else return ({ ...user, follow: true })
				}
				else return user
			})
		]
		return stateCopy
	} else if (action.type === 'SET_USER_STATE') {
		stateCopy = {...data, users: [...action.data]}
		stateCopy.axiosParams.pageCount = Math.ceil(action.pageCount / stateCopy.axiosParams.usersCount)
		stateCopy.axiosParams.activePage = (action.activePage || data.axiosParams.activePage)
		
		return stateCopy
	}
	else if (action.type === 'SET_PAGE_NUMBER_LIST') {
		return { ...data, pageNumberList: [...action.pageNumberList] }
	}
	// 
	return data
}
// експорт за замовчуванням
export default usersReducer