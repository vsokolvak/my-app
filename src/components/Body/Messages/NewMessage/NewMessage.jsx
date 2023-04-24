// імпорти необхідних компонентів
import React from "react";
import classes from "./NewMessage.module.css";
// створюю компоненту нюмеседж
const NewMessage = (props) => {
// змінна меседжітем, ссилка на текстове поле
  let newMessageItem = React.createRef()
// функція для зміни ввідних символів в текстове поле
  const changeMessage = () => { props.changeMessage(newMessageItem.current.value)}
// функція для відправки в діспач нового повідомлення
  const updateSendMessage = () => {props.updateSendMessage()}

  return (
    // блок нового повідомлення
    <div className={classes.newMessage}>
      {/* текстове поле ввода */}
      <textarea
      // при зміні тексту визиваю функцію changeMessage
        onChange={changeMessage}
        // захардкожене значення в текстовому полі, береться зі стейту
        value={props.value}
        // створення ссилки на текстове поле
        ref={newMessageItem}
        name=""
        id=""
        // стовпчики
        cols="30"
        // стрічки текстового поля
        rows="10"
      ></textarea>
      {/* кнопка додавання нового повідомлення */}
      <button 
        // обробка кліка , визиваю функцію updateSendMessage
        onClick={updateSendMessage}>
          {/* текстове значення */}
        send message
      </button>
    </div>
  );
};
// експортую по дефолту компоненту
export default NewMessage;
