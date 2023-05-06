// імпорти необхідних компонентів
import NewMessage from "./NewMessage";
import { connect } from "react-redux";
// фунуція мапстейттупропс, передає даді необхіжні компоненті із пропсів у вигляді обєкту.
// велю, дані зі стейту, які будуть виводитися у полі воду
const mapStateToProps = state => ({value: state.messages.inputMessage})
// функція мапдіспатчтупропс, передає функції-діспатчі, для обробки дій користувача
const mapDispatchToProps = dispatch => {
  return ({
    // функція обробки вводу тексту в текстове поле
    changeMessage(text) {
      // діспатч із редюсера
      dispatch({
        // тип діспатча
        type: 'UPDATE-INPUT-TEXT',
        // це текст, який ввели в текстове поле, ним буде замінено значення в стейті
        userTXT: text
      });
    },
    // функція обробки нажаття кнопки
    updateSendMessage() {
      // діспатчу нове повідомлення
      dispatch({
        // тип екшена
        type: 'UPDATE-MESSAGE',
      })
    }
  })
}
// оголошую контейнерну компоненту для обчислення логіки компоненти NewMessage
const NewMessageConteiner = connect(mapStateToProps, mapDispatchToProps)(NewMessage)
// експортую за замовчуваннят компоненту
export default NewMessageConteiner;
