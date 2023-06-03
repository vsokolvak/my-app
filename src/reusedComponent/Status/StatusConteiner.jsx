import { connect } from "react-redux"
import { compose } from "redux"
import Status from "./Status"
import React from "react"

// <StatusConteiner status={} changeStatus={} />
// компонента для відображення статусу, приймає пропси:
// status - статус
// changeStatus - функція яка міняє статус, приймає в параметри новий статус

class StatusConteiner extends React.Component {

	// локальний стейт
	state = {
		// значення для активації редагування статусу
		statusEdit: false,
		// змінна, в якій зберігається дані вводу в текстове поле
		inputText: '',
	}

	// якщо при перемалюванні компоненти прийшов новий статус перезаписує його в локальний стейт
	componentDidUpdate(prevProps) {
		if (prevProps.status !== this.props.status) {
			this.setState({ inputText: this.props.status });
		}
	}

	// метод, для обробки вводу в текстове поле
	// міняє в локальному стейті дані які виводяться в поле вводу, на ті які прийшли 
	changeText = (text) => {
		this.setState({ inputText: text });
	}

	// визиває колбек функцію, яка діспатчить новий стейт,
	// вона передається в компоненту з пропсами
	changeStatus = () => {
		this.props.changeStatus(this.state.inputText)
	}

	// функція, для зміни значення редагування статусу
	// переписує локальний стейт значення едіт на тру або фолс
	edits = (type) => {
		this.setState( ({ statusEdit: type }) )
	}

	render() {
		return(<div>
			<Status {...this.props} 
				edit={this.state.statusEdit}
				inputText={this.state.inputText}
				edits={this.edits}
				changeText={this.changeText}
				changeStatus={this.changeStatus}
			/>
		</div>)}
}

const mapDispatchToProps = (state) =>({

})

export default compose(
	connect(mapDispatchToProps)
)(StatusConteiner)