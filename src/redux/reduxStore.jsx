import { applyMiddleware, combineReducers, createStore } from "redux";
import messageReducer from "./reducers/messageReducer";
import postsReducer from "./reducers/postsReducer";
import usersReducer from "./reducers/usersReducer";
import profileReducer from "./reducers/profileReducer";
import autorizeReducer from "./reducers/autorizeReducer";
import thunk from "redux-thunk";

// створюю (редюсер) діспач функцію комбінуючи редюсери
let reducers = combineReducers({
    // добавляю в стор обєкт меседж та редюсер
    messages: messageReducer,
    // добавляю в стор обєкт пост та редюсер
    posts: postsReducer,
    // добавляю в стор обєкт юзерс та редюсер
    users: usersReducer,
		// добавляю в стор обєкт профайл та редюсер
		profile: profileReducer,
		// добавляю в стор обєкт ауторіз та редюсер
		autorize: autorizeReducer,
})
// створюю сторе
let store = createStore(reducers, applyMiddleware(thunk))
window.store = store
// експортую стр по дефолту
export default store