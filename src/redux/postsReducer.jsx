// початкові дані для ініціалізації стейту
const initialState = {
    post: [{
        txtMessage: "this is post 1",
        likeCount: "23"
    },
    {
        txtMessage: "this is post 2",
        likeCount: "56",
    },
    ],
    inputMessage: ''
}
// функція-редюсер для постів (приймає параметри стейт, та екшин(дані які передасть компонента))
const postsReducer = (data = initialState, action) => {
    // копія стейту
    let copyState = {...data}
    // обробка функції, тип екшина UPDATE-INPUT-TEXT
    if (action.type === 'UPDATE-INPUT-TEXT') {
        // міняю інпутмеседж на дані які прийшли з компоненти
        copyState.inputMessage = action.userTXT
    // обробка функції, тип екшина UPDATE-POSTS
    } else if (action.type === 'UPDATE-POSTS') {
        // створюю новий обєкт з даними для нового поста
        const newMessage = {
            txtMessage: action.userTxt,
            likeCount: action.userLike || 0
        }
        //створюю копію постів
        copyState.post = [...data.post]
        // пушу новий пост
        copyState.post.push(newMessage)
        console.log(copyState)
        copyState.inputMessage = ''
    }
    // функція редюсер повертає змінену копію стейту
    return copyState
}
export default postsReducer