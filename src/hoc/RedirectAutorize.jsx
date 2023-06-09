// імпортую необхідні компоненти
import { connect } from "react-redux"
import LoginConteiner from "../reusedComponent/Login/LoginConteiner"

// Хук функція, приймає компоненту в параметр
// відобразить сторінку авторизації, якщо не авторизований користувач
export const RedirectHoc = Component => {
	
	// функціональна компонента
	const RedirectAutorize = props => {

		// повертаю жсх
		return (
			// якщо не авторизований, перенаправляю на сторінку авторизації
			// інакше відмальовує компоненту
			<div>
				{!props.autorize ? <LoginConteiner displayLogin={true} /> : <Component />}
			</div>
		)
	}

	const mapDispatchToProps = (state) => {
		return ({
			autorize: state.autorize.autorizeData.logined,
		})
	}

	return connect(mapDispatchToProps)(RedirectAutorize)

}

