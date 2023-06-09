// підключаю необхідні компоненти
import { Field, reduxForm } from "redux-form";
import classes from "./NewPost.module.css";
import React from "react";
import TextArea from "../../../../formData/FormComponent/TextArea/TextArea";


// оголошую функціональну компоненту NewPost
const NewPost = (props) => {
  
	// функція для обробки відправки форми
	let onSubmit = dataForm => { props.postsAddPost(dataForm.newPostText) }

	let maxLenght = props.setMaxLenght(30)
	// повертаю жсх розмітку
  return (

    // головний блок компоненти
    <div>

			{/* форма додавання поста */}
			<AddNewPostForm onSubmit={onSubmit} required={props.required} maxLenght={maxLenght} />

    </div>
  );
};

// форма, додавання нового посту
let AddNewPostForm = props => {
	return <div>
		<form onSubmit={props.handleSubmit} className={classes.form}>

			{/* поле вводу */}
			<div className={classes.input}>
				<label htmlFor='inputText' > Add new Post </label>
				<Field 
					id='inputText' 
					name='newPostText' 
					component={TextArea}
					validate={[props.required, props.maxLenght]}
					rows={3}
					cols={30}
				>
				</Field>
			</div>

			{/* кнопка відправки */}
			<div className={classes.button}>
				<button type="submit" > Add new Post </button>
			</div>
		</form>
	</div>
}

// обертаю компоненту хуком редаксформ
AddNewPostForm = reduxForm({ form: 'AddNewPostForm' })(AddNewPostForm)

// експорт компоненти по дефолту
export default NewPost;
