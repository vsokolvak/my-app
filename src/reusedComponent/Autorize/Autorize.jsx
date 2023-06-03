// імпортую необхідні компоненти
import classes from './Autorize.module.css'

// функціональна компонента Autorize
const Autorize = (props) => {
	console.log(props)
	// повертаю жсх розмітку
	return(
		// головний контейнер
		<div className={classes.autorizeCblock}>
			<div className={classes.autorizeConteiner}>
				{/* login */}
				<div>
					<span>login</span>
					<input type="email" name="email" id="email" />
				</div>
				{/* password */}
				<div>
					<span>password</span>
					<input type="password" name="pas" id="pas" />
				</div>
				{/* button send */}
				<button>Login</button>
			</div>
		</div>
	)
}

// експортую по дефолту
export default Autorize