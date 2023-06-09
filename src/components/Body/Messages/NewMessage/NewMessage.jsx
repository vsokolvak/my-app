// імпорти необхідних компонентів
import React from "react";
import classes from "./NewMessage.module.css";
import { Field, reduxForm } from "redux-form";
import TextArea from "../../../../formData/FormComponent/TextArea/TextArea";

// створюю компоненту нюмеседж
const NewMessage = (props) => {

// функція для відправки форми
	const messageSend = dataForm => { props.messageSend(dataForm.inputText)}

  return (
    // блок нового повідомлення
    <div className={classes.newMessage}>

				{/* форма вводу повідомлення */}
			<NewMessageForm onSubmit={messageSend} required={props.required} maxLenght={props.maxLenght} />

    </div>
  );
};

// компонента з формою
let NewMessageForm = props => {

	return <form onSubmit={props.handleSubmit} className={classes.form}>

		{/* поле вводу */}
		<div className={classes.input}>

			<label htmlFor="inputText" > New Message Text </label>

			<Field 
				id="inputText" 
				name="inputText" 
				component={TextArea} 
				rows={3}
				cols={30}
				validate={[ props.required, props.maxLenght ]}
			></Field>
		</div>

		{/* кнопка сабміт */}
		<div className={classes.button}>
			<button type="submit" > Відіслати </button>
		</div>

	</form>
}

NewMessageForm = reduxForm({form: 'newMessageForm'})(NewMessageForm)

// експортую по дефолту компоненту
export default NewMessage;
