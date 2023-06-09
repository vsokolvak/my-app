// імпортую необхідні компоненти
import { connect } from "react-redux";
import NewPost from "./NewPost";
import { compose } from "redux";
import { postsAddPost } from "../../../../redux/reducers/postsReducer";
import { maxLenght, required } from "../../../../formData/formValidation";


let NewPostConteiner = props => <NewPost {...props} required={required} setMaxLenght={maxLenght} />


// опис функції, яка генерує дані необхідні для роботи компоненти
const mapStateToProps = (state) => ({})

NewPostConteiner = compose(connect(mapStateToProps, { postsAddPost }))(NewPostConteiner)

export default NewPostConteiner;
