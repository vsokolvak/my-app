export const required = value => value ? undefined : 'field is empty'

export const maxLenght = max => value => (value && value.length > max) 
	? `Must be ${max} characters or less` 
	: undefined