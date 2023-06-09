// початкові дані для ініціалізації стейту
const initialState = {
	// масив з постами
    post: [{
        txtMessage: "this is post 1",
        likeCount: "23"
    },
    {
        txtMessage: "this is post 2",
        likeCount: "56",
    },
    ],
}
// функція-редюсер для постів (приймає параметри стейт, та екшин(дані які передасть компонента))
const postsReducer = (data = initialState, action) => {

	switch (action.type) {
		case 'UPDATE-POSTS':
			// створюю новий обєкт з даними для нового поста
			const newMessage = {
				txtMessage: action.inputMessage,
				likeCount: action.userLike || 0
			}
			// додаю новий пост в масив
			data.post.push(newMessage)
			
			// повертаю оновлений стейт
			return { ...data, post: [ ...data.post ] }
		default:
			return data
	}
}

// екшн кріейтор, для додавання нового посту
export const postsAddPost = inputMessage => ({
		// тип екшену запиту
		type: 'UPDATE-POSTS',
		// змінна, на основі якої формується новий пост в обєкті
		inputMessage
})


export default postsReducer