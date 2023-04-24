// імпорти необхідних компонентів
import React from "react";
import NewMessage from "./NewMessage";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return ({
    value: state.messages.inputMessage
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    changeMessage(text) {
      dispatch({
        // тип діспатча
        type: 'UPDATE-INPUT-TEXT',
        // це текст, який ввели в текстове поле, ним буде замінено значення в стейті
        userTXT: text
      });
    },
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
