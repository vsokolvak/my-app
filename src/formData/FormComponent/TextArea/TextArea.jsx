import classes from './TextArea.module.css'
import { HocShowError } from '../../../hoc/HocShowError/HocShowError'

// компонента
const TextArea = ({ input, meta, ...props }) => {
	return (
		<textarea className={classes.textarea} {...input} {...props} />
	)
}

// обгортаю компоненту хуком, і експортую
// хук, показує повідомлення про помилку
export default HocShowError(TextArea)