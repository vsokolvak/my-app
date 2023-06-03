// імпортую необхідні компоненти
import { NavLink } from 'react-router-dom'
import classes from './Autorize.module.css'
import Loader from './../../../reusedComponent/Loader/Loader'

// функціональна компонента ауторіз
const Autorize = props => {
	
	// повертаю жсх розмітку
	return(
		// головний блок
		<div>
			{/* якщо користувач залогінений повертаю блок із даними користувача */}
			{props.autorizeData.logined 
				? <NavLink to={`profile/${props.autorizeData.id}`}> <div className={classes.autorizeInfo}> 
						{/* фото користувача, якщо відсутнє, то дефолтне фото */}
						<img src={props.autorizeData.photo 
						? props.autorizeData.photo
						: props.defoultPhoto} 
						alt="mePhoto" />
						{/* логін імейл авторизованого користувача */}
						<div className={classes.autorizeInfoName}>
							<span> {props.autorizeData.login} </span> 
							<span> {props.autorizeData.email} </span>
						</div>
				</div></NavLink>
					// якщо користувач не авторизований, вивожу кнопку авторизації
				: !props.disableButton ? <div> <button onClick={props.logined} > Login </button> </div> 
					: < Loader />
			}
		</div>
	)
}

// експортую по дефолту
export default Autorize