// імпортую необхідні компоненти
import classes from './Follow.module.css'

// функціональна компонента фолов
const Follow = (props) => {

	// повертаю жсх розмітку
	return(
		// головний контейнер
		<div className={classes.followConteiner}>
			{/* текстове поле із текстом фолоу анфолоу в залежності від підписки */}
			<div className={classes.status}>
				{props.follow ? <span>Followed</span> : <span>Unfollowed</span>}
			</div>
			{/* кнопка підписатися чи відписатися */}
			<button className={classes.button}
			disabled={props.disabled}
			onClick={props.followAction}>
				{props.disabled ? 'disabled' : ''}
				{!props.follow ? 'Follow' : 'Unfollow'}
			</button>
		</div>
	)
}

// експортую по дефолту
export default Follow