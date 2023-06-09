import React from "react";
import LoginForm from './LoginForm'
import { required, maxLenght } from "../../formData/formValidation";
import { connect } from "react-redux";
import { autorizeMeLogin } from "../../redux/reducers/autorizeReducer";

// <LoginConteiner displayLogin={true} loginDeactivate={} />
// displayLogin - змінна яка задає, чи відображати форму
// loginDeactivate - колбек функція, для приховання форми, при нажатті на кнопку відміна

class loginConteiner extends React.Component {

	state = {
		displayLogin: this.props.displayLogin,
	}

	displayLogin = type => { this.setState({displayLogin: type})}

	// метод, обробки запиту відправлення форми
	submitForm = dataForm => { this.props.autorizeMeLogin(dataForm) }

	// компонента логін, експортується за замовченням
	// повертає дівку на весь екран, з формою логіна в центрі
	render() { return (
		<div>
			<LoginForm 
				onSubmit={this.submitForm} 
				clearForm={this.displayLogin} 
				displayLogin={this.state.displayLogin}
				loginDeactivate={this.props.loginDeactivate}
				required={required}
				setMaxLenght={maxLenght}
				logined={this.props.logined}
			/>
		</div>
	)}
}

const mapStateToProps = state => ({ logined: state.autorize.autorizeData.logined }) 

export default connect(mapStateToProps, { autorizeMeLogin })(loginConteiner)