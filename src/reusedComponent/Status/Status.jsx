import classes from './status.module.css'
import React from 'react'

const Status = (props) => {
	
	// реф на поле вводу
	let statusTxt = React.createRef()

	// функція яка визиває колбек едітс зі значенням тру або фолс
	// для перезапису локального стейту значення едіт
	const editTrue = () => { props.edits(true) }
	const editFalse = () => { props.edits(false) }

	// функція яка визиває колбек для редагування змінної, яка відображається в полі вводу, передає актуальні дані, які ввів користувач
	const changeText = () => {
		props.changeText(statusTxt.current.value)
	}

	// функція, яка визиває колбек, який діспатчить введені дані в стейт\
	// для оновлення статусу
	// та відміняє режим редагування
	const changeStatus = () => {
		props.changeStatus()
		editFalse()
	}

	return <div className={classes.status}>

		{/* перевіряю, чи активний режим редагування */}
		{!props.edit ? 
		// якщо неактивний, тоді показую статус, та кнопку редагування
		<span onDoubleClick={editTrue} className={classes.wiewStatus}>
			<span> {props.status || 'status'} </span>
			<button onClick={editTrue} >editStatus</button>
		</span>
		: 
		// якщо режим редагування активний, показую блок редагування
		<div className={classes.editStatus}>
			{/* поле для вводу нового статусу */}
			<input 
				autoFocus
				value={props.inputText} 
				onChange={changeText} 
				type="text" 
				ref={statusTxt} 
			/>
			{/* кнопки ок, кансел */}
			<button onClick={ changeStatus } >Ok</button>
			<button onClick={editFalse} >Cancel</button>
		</div>}

	</div>
}

export default Status