import { Field, reduxForm } from 'redux-form'
import classes from './login.module.css'
import Input from '../../formData/FormComponent/Input/Input'

// компонента з формою
let LoginForm = props => {

	const clearForm = () => {
		props.clearForm(false)
		if (props.loginDeactivate) setTimeout(() => {
			props.loginDeactivate()
		}, 1500)
	}

	const maxLenght = props.setMaxLenght(20)

	if (props.logined) clearForm()

	return (
		// форма
		<div className={`${classes.login} ${!props.displayLogin ? classes.clearForm : ''}`}>
		<form onSubmit={props.handleSubmit} className={classes.form}>

			{/* поле вводу email */}
			<div className={classes.formText}>
					<label htmlFor="email">email</label>
					<Field id="email" name="email" 
				component={Input} type="text" 
				validate={[props.required, maxLenght]}/>
			</div>

			{/* поле вводу пароля */}
			<div className={classes.formText}>
				<label htmlFor="password">password</label>
					<Field id="password" name="password" 
					component={Input} type="password" 
					validate={[props.required, maxLenght]}/>
			</div>

			{/* поле чекбокс запамятати мене */}
			<div>
				<label htmlFor="rememberMe">rememberMe</label>
				<Field id="rememberMe" name="rememberMe" component="input" type="checkbox" />
			</div>

			{/* кнопка відправки */}
			<button type="submit">LogIn</button>

			{/* кнопка відміни */}
			<button type='button' onClick={clearForm} >canlcel</button>

		</form>
		</div>
	)
}

// обертаю компоненту хуком редаксформ з бібліотеки редаксформ
export default reduxForm({ form: 'loginForm' })(LoginForm)