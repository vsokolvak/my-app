// дані для формування стейта в редаксі
const initialState = {
    users: [
        {
            name: "user 1",
            id: "1",
            avatar: "https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"
        },
        {
            name: "user 2",
            id: "2",
            avatar: "https://w7.pngwing.com/pngs/246/1013/png-transparent-painting-wall-mural-hand-drawn-aesthetic-avatar-love-watercolor-painting-furniture-thumbnail.png"
        },
        {
            name: "user 3",
            id: "3",
            avatar: "https://w7.pngwing.com/pngs/444/107/png-transparent-avatar-female-portrait-woman-avatars-xmas-giveaway-icon-thumbnail.png"
        },
        {
            name: "user 4",
            id: "4",
            avatar: "https://w7.pngwing.com/pngs/737/959/png-transparent-bart-simpson-bart-simpson-homer-simpson-lisa-simpson-marge-simpson-moe-szyslak-bart-simpson-springfield-hand-fictional-character-thumbnail.png"
        },
        {
            name: "user 5",
            id: "5",
            avatar: "https://w7.pngwing.com/pngs/876/691/png-transparent-avatar-coffee-cup-zorro-avatars-xmas-giveaway-icon-thumbnail.png"
        },

    ],
    message: [
        { textMessage: "txt1", id: "1", likesCount: 0 },
        { textMessage: "txt2", id: "2", likesCount: 0 },
        { textMessage: "txt3", id: "3", likesCount: 0 },
        { textMessage: "txt4", id: "4", likesCount: 0 },
        { textMessage: "txt5", id: "5", likesCount: 0 },
    ]
}
// функція-редюсер, формує стейт в обєкт месседж, та діспачить запити до нього
const messageReducer = (data = initialState, action) => {

	switch (action.type) {
		case 'SEND-MESSAGE':
			// створюю новий обєкт для масиву меседж
			const newTxtMessage = {
				textMessage: action.textMessage,
				id: "5",
				likesCount: 0
			}

			// добавляю новий елемент в масив повідомлень
			data.message.push(newTxtMessage)

			// повертаю оновлений стейт

			return {...data, message: [...data.message]}

		default:
			return data
	}
}
export const messageSend = textMessage => ({
	// тип діспатча
	type: 'SEND-MESSAGE',
	// це текст, який ввели в текстове поле, ним буде замінено значення в стейті
	textMessage
})


// експорт за замовчуванням
export default messageReducer