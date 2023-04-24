// підключаю необхідні компоненти
import classes from "./NewPost.module.css";
import React from "react";
// оголошую функціональну компоненту NewPost
const NewPost = (props) => {
  // ссилка на поле вводу тексту
  let newPostElement = React.createRef();
  // функція для обробки зміни текту в тектовому полі, визиває колбек із пропсів
  const addTxt = () => { props.addTxt(newPostElement.current.value)}
  // функція для обробки нажимання на кнопку для відправки нового посту
  const addPost = () => { props.addPost(props.inputMessage)}
  // повертаю жсх розмітку
  return (
    // головний блок компоненти
    <div className={classes.newpost}>
      {/* заголовок */}
      New post
      {/* текстове поле вводу */}
      <textarea
        // обробка дії зміни тексту
        onChange={addTxt}
        // створення ссилки для текстового поля
        ref={newPostElement}
        // значення текстового поля, береться із стейту
        value={props.inputMessage}
        name=""
        id=""
        // кількість стовпчиків
        cols="20"
        // кількість строк
        rows="3"
      ></textarea>
      {/* кнопка відправки нового посту */}
      <button 
        // обробка дії користувача при нажаті на кнопку
        onClick={addPost}>
          {/* текст кнопки */}
        Add post
      </button>
    </div>
  );
};
// експорт компоненти по дефолту
export default NewPost;
