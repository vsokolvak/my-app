// імпортую необхідні компоненти
import classes from "./Messages.module.css";
import React from "react";
import User from "./User/User";
import Message from "./Message/Message";
import NewMessageConteiner from './NewMessage/NewMessageConteiner';

// оголошую функціональну компоненту
const Messages = (props) => {
  // формую масив компонент users, на основі даних із пропсів
  // перебираю масив users за допомогою методу map
  const usersitems = props.users.map((el) => {
    // створюю новий елемент масиву, компоненту юзер, формую для неї пропси
    return <User
      // передаю змінні на основі даних із обєкту зі стейту
      // мабуть це потрібно зробити в компоненті юзер, перероби
      name={el.name}
      id={el.id}
      avatar={el.avatar} />;
  });
  // формую масив компонент Message, на основі даних зі стейту
  // перебираю масив message за допомогою методу map
  // перероби в компоненті меседж
  const messageitems = props.message.map((el) => {
    // створюю новий елемент масиву, компоненту юзер, формую для неї пропси
    return <Message
      // передаю змінні на основі даних із обєкту зі стейту
      textMessage={el.textMessage}
      likesCount={el.likesCount} />;
  });
  // поветаю жсх розмітку
  return (
    // головний блок розмітки
    // контейнер для компонент
    <div className={classes.box}>
      {/* компонента  Messages*/}
      <div className={classes.box}>
        {/* блок розмітки з користувачами */}
        <div className={classes.users}>
          {/* заголовок */}
          <p> users </p>
          {/* тут розгортаю масив користувачів, який був створений в контейнерній компоненті */}
          {usersitems}
        </div>
        {/* блок повідомлень */}
        <div div className={classes.messages}>
          {/* заголовок блоку повідомлень */}
          <p> messages </p>
          {/* тут розгортаю масив повідомлень, який створений в контейнерній компоненті */}
          {messageitems}

        </div>
      </div>
      {/* компонента  NewMessageConteiner*/}
      <NewMessageConteiner />
      
    </div>
  );
};
// експортую за замовченням Messages
export default Messages;
