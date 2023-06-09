// імпорти необхідних компонентів
import { compose } from "redux";
import NewMessage from "./NewMessage";
import { connect } from "react-redux";
import { messageSend } from "../../../../redux/reducers/messageReducer";
import { required, maxLenght } from "../../../../formData/formValidation";

const setMaxLenght = maxLenght(30)

let NewMessageConteiner = props => {
	return <div>
		<NewMessage {...props} required={required} maxLenght={setMaxLenght} />
	</div>
}

// фунуція мапстейттупропс, передає даді необхіжні компоненті із пропсів у вигляді обєкту.
const mapStateToProps = state => ({})

NewMessageConteiner = compose
	(connect(mapStateToProps, { messageSend }))
	(NewMessageConteiner)

// експортую контейнерну компоненту для обчислення логіки компоненти NewMessage
export default NewMessageConteiner 
