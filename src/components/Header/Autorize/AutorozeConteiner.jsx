// імпортую необхідні компоненти
import React from "react";
import { connect } from "react-redux";
import Autorize from "./Autorize";
import axios from "axios";
import { autorizeSetData, autorizeSetPhoto, autorizedMe } from "../../../redux/reducers/autorizeReducer";
import { compose } from "redux";

// класова компонента-контейнер для блоку ауторізед
class AutorizeConteiner extends React.Component {

	// метод, який виконується при створенні компоненти
	componentDidMount() {
		// this.logined()
	}

	// мій метод, відправляє на сервер запит для авторизації, якщо успішно, записує в стейт дані авторизованого користувача, та загружає встановлює фото
	logined = () => {	
		this.props.autorizedMe();
		this.setPhoto()
	}

	// мій метод для загрузки і встановлення фото авторизованого користувача
	setPhoto = () => {
		if (this.props.autorizeData.logined) axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.autorizeData.id}`).then(response => {
			this.props.autorizeSetPhoto(response.data.photos.large)
		})
	}

	// метод рендер
	render() {

		// повертає жсх розмітку
		return(
			// компонента ауторіз, передаю пропси, та колбеком метод логінед
			<Autorize {...this.props} logined={this.logined} />
		)
	}
}

// функція для створення пропсів зі стейту для метода конект
const mapDispatchToProps = state => {
	return ({
		autorizeData: state.autorize.autorizeData,
		defoultPhoto: state.users.defoultImage,
		errorMessages: state.autorize.errorMessages,
		disableButton: state.autorize.disableButton
	})
}

// експортую по дефолту компоненту через метод конект, передаючи пропси зі стейту та конструктори діспатчів
export default compose(connect(mapDispatchToProps, { autorizeSetData, autorizeSetPhoto, autorizedMe }))(AutorizeConteiner)