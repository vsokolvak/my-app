import classes from './Input.module.css'
import { HocShowError } from '../../../hoc/HocShowError/HocShowError'

// компонента
const Input = ({ input, meta, ...props }) => {
	return (
		<input className={classes.input} {...input} {...props} />
	)
}

// обгортаю компоненту хуком, і експортую
// хук, показує повідомлення про помилку
export default HocShowError(Input)