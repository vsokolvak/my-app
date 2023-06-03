// імпортую необхідні компоненти
import { connect } from "react-redux";
import NewPost from "./NewPost";
import { compose } from "redux";

// опис функції, яка генерує дані необхідні для роботи компоненти
const mapStateToProps = (state) => {
  // функція повертає обєкт, і передає його в пропси
  return ({
    // велю, дані, які відобразяться в полі вводу
    inputMessage: state.posts.inputMessage
  })
}
// опис функції, яка генерує в пропси функції необхідні для роботи компоненти
const mapDispatchToProps = (dispatch) => {
  return ({
    // функція для обробки вводу даних в текстове поле, приймає текст який вводиться в дане поле, і діспатчить його в стейт
    addTxt(text) {
      // діспатчить екш н в стейт
      dispatch({
        // тип екшену
        type: 'POSTS-UPDATE-INPUT-TEXT',
        // текст, який передається із тектового поля
        userTXT: text
      })
    },
    addPost(inputMessage) {
      // діспатчу запит
      dispatch({
        // тип екшену запиту
        type: 'UPDATE-POSTS',
        // змінна, на основі якої формується новий пост в обєкті
        userTxt: inputMessage
      },);
    }
  })
}

const NewPostConteiner = compose(connect(mapStateToProps, mapDispatchToProps))(NewPost)

export default NewPostConteiner;
