// імпортую необхідні компоненти
import { connect } from "react-redux";
import MyPosts from "./MyPosts";
import { compose } from "redux";

// функція що формує пропси з даними зі стейту
const mapStateToProps = (state) => {
  return ({
    // пости
    post: state.posts.post,
  })
}

// функція коннект що визиває компоненту майпост
const MyPostsConteiner = compose(connect(mapStateToProps))(MyPosts)
// експорт за замовченням
export default MyPostsConteiner;
