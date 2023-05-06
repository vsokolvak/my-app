import { combineReducers, createStore } from "redux";
import messageReducer from "./messageReducer"
import postsReducer from "./postsReducer"
import usersReducer from "./usersReducer";
// створюю (редюсер) діспач функцію комбінуючи редюсери
let reducers = combineReducers({
    // добавляю в стор обєкт меседж та редюсер
    messages: messageReducer,
    // добавляю в стор обєкт пост та редюсер
    posts: postsReducer,
    // добавляю в стор обєкт юзерс та редюсер
    users: usersReducer,
})
// створюю сторе
let store = createStore(reducers)
window.store = store
// експортую стр по дефолту
export default store