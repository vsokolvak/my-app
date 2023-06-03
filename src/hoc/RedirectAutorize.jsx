// імпортую необхідні компоненти
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

// Хук функція, приймає компоненту в параметр
// редіректить на сторінку авторизації, якщо не авторизований користувач
export const RedirectHoc = (Component) => {
	
	// функціональна компонента
	const RedirectAutorize = (props) => {

		// повертаю жсх
		return (
			// якщо не авторизований, перенаправляю на сторінку авторизації
			// інакше відмальовує компоненту
			<div>
				{!props.autorize && <Navigate to={'/autorize'} /> }
				{<Component />}
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

