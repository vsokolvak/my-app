import classes from './HocShowError.module.css'

export const HocShowError = Component =>{
	return ({input, meta, ...props}) => {

		let error = false
		if (meta.error) error = true

		let classError = ''
		if (error) classError += classes.error

		return (<div className={classError}> 
			<Component {...input} {...props} />
			{error && <span>{meta.error}</span>}
		</div>)
	}
}