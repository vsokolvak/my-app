// імпортую необхідні компоненти
import { connect } from "react-redux";
import MyPosts from "./MyPosts";

// функція що формує пропси з даними зі стейту
const mapStateToProps = (state) => {
  return ({
    // пости
    post: state.posts.post,
  })
}
// функція, що формує пропси з діспатч запитами
const mapDispatchToProps = () => {}
// функція коннект що визиває компоненту майпост
const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
// експорт за замовченням
export default MyPostsConteiner;
