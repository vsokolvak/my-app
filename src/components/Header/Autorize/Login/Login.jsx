import { Field, reduxForm } from 'redux-form'
import classes from './login.module.css'

// компонента логін, експортується за замовченням
// повертає дівку на весь екран, з формою логіна в центрі
let Login = props => {

	// функція, обробки запиту відправлення форми
	let submitForm = dataForm => { console.log(dataForm) }

	return (
		<div className={classes.login}>
			<LoginForm onSubmit={submitForm} />
		</div>
	)
}

// компонента з формою
let LoginForm = props => {

	return (
		// форма
		<form onSubmit={props.handleSubmit} className={classes.form}>

			{/* поле вводу логіна */}
			<div className={classes.formText}>
				<label htmlFor="login">login</label>
				<Field id="login" name="login" component="input" type="text" />
			</div>

			{/* поле вводу пароля */}
			<div className={classes.formText}>
				<label htmlFor="password">password</label>
				<Field id="password" name="password" component="input" type="password" />
			</div>

			{/* поле чекбокс запамятати мене */}
			<div>
				<label htmlFor="rememberMe">rememberMe</label>
				<Field id="rememberMe" name="rememberMe" component="input" type="checkbox" />
			</div>

			{/* кнопка відправки */}
			<button type="submit">LogIn</button>

		</form>
	)
}

// обертаю компоненту хуком редаксформ з бібліотеки редаксформ
LoginForm = reduxForm({ form: 'loginForm' })(LoginForm)

export default Login