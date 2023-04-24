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
    ],
    inputMessage: ""
}
// функція-редюсер, формує стейт в обєкт месседж, та діспачить запити до нього
const messageReducer = (data = initialState, action) => {
    // роблю копію стейта, для відловлювання змін і роботи в реакт редакс
    let stateCopy = {...data}
    // обробка запиту для типу UPDATE-INPUT-TEXT
    if (action.type === 'UPDATE-INPUT-TEXT') {
        // міняю дані в інпутмеседж на дані які прийшли в запиті
        stateCopy.inputMessage = action.userTXT
    // обробка запиту для типу UPDATE-MESSAGE
    } else if (action.type === 'UPDATE-MESSAGE') {
        // створюю новий обєкт для масиву меседж
        const newTxtMessage = {
            textMessage: data.inputMessage,
            id: "5",
            likesCount: 0
        }
        // роблю глибоку копію масиву меседж в копії стейту
        stateCopy.message = [...data.message]
        // добавляю новий елемент в копію стейту
        stateCopy.message.push(newTxtMessage)
        // очищую поле вводу
        stateCopy.message.inputMessage = ''
    }
    // повертаю копію стейту, щоб реакт редакс порівняв її з оригіналом, і переписав компоненти, які зазнали змін
    return stateCopy
}
// експорт за замовчуванням
export default messageReducer