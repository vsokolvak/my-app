// імпортую необхідні компоненти
import { connect } from "react-redux";
import Messages from "./Messages";
// опис функції mapStateToProps, яка передає в пропси дані зі стейту у вигляді масиву
const mapStateToProps = state => {
  return ({
    // змінна юзерс, містить обєкт юзерів
    users: state.messages.users,
    // змінна меседж, містить обєкт з меседжами
    message: state.messages.message,
  })
}
// конект презентаційної компоненти меседж, до її контейнерної компоненти
const MessagesConteiner = connect(mapStateToProps,{})(Messages)

// експортую за замовчанням MessagesConteiner
export default MessagesConteiner;
