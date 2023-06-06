// імпортую необхідні компоненти
import { connect } from 'react-redux';
import StatusConteiner from '../../reusedComponent/Status/StatusConteiner';
import AutorozeConteiner from './Autorize/AutorozeConteiner';
import classes from './Header.module.css'
import React from 'react';
import { autorizeSetMyStatus } from '../../redux/reducers/autorizeReducer';

// функціональна компонента хідер
const Header = (props) => {

	// повертаю жсх
	return (
		// контейнер хедер
		<header className={classes.header}>
			{/* блок логотипу */}
			<div className={classes.page}>			
				<span className={classes.logo}> logo-text </span>
				<span> header </span>
			</div>

			{/* блок даних авторизації */}
			<div className={classes.autorize}>
				
				{/* контейнер, в якому показується статус */}
				{ props.logined && <StatusConteiner status={props.status} changeStatus={props.autorizeSetMyStatus } />}
				
				{/* контейнер авторизації */}
				<AutorozeConteiner />
			</div>
		</header>
	);
}

	const mapStateToProps = (state) => ({
	status: state.autorize.status,
	logined: state.autorize.autorizeData.logined
})

// експортую за дефолтом хедер
export default connect(mapStateToProps, {autorizeSetMyStatus})(Header);
