import { combineReducers, createStore } from "redux";
import messageReducer from "./messageReducer"
import postsReducer from "./postsReducer"
// створюю (редюсер) діспач функцію комбінуючи редюсери
let reducers = combineReducers({
    // добавляю в стор обєкт меседж та редюсер
    messages: messageReducer,
    // добавляю в стор обєкт пост та редюсер
    posts: postsReducer
})
// створюю сторе
let store = createStore(reducers)

// експортую стр по дефолту
export default store