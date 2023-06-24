// імпортую необхідні компоненти
import FollowConteiner from '../../../../reusedComponent/Follow/FollowConteiner';
import Loader from './../../../../reusedComponent/Loader/Loader'
import classes from "./ProfileInfo.module.css";
import React from 'react';

// функціональна компонента, отримує пропси в параметри
const ProfileInfo = props => {

	// змінна для масиву контактів юзера
	let contacts = []

	// змінна для зберігання ссилки на пропси даних юзера, щоб скоротити імя в циклі перебору масиву
	let con = props.currentProfile ? props.currentProfile.contacts : {}

	// формую масив контактів, перебираючи обєкт контактів циклом фор ін
	for (let key in con) {

		// якщо по ключу є значення відмінне від фалс, то добавляю його в масив, якщо контактів немає, а ключ є, то не добавляю в масив
		if (con[key]){
			contacts.push(<span className={classes.contactitems} key={key}> <span className={classes.contactitemskey}> {key}: </span> <a href={'Https://' + con[key]} target="_blank" rel="noreferrer"> {con[key]} </a> </span>)}
	}

	// повертаю жсх розмітку
	return (

		<div>
			{/* якщо в профайлі є дані, відмальовую юзера, якщо немає, то лоадер, покищо ошибки запиту не обробляю */}
			<div>{props.currentProfile
				?
				<div className={classes.profile}>
					{/* повне імя, + аватарка */}
					<div className={classes.about}>
						<div className={classes.fullname}>{props.currentProfile.fullName}</div>
						<img className={classes.photos} src={props.currentProfile.photos.large} alt="avatarka" />
						{/* компонента фоллов */}
						<FollowConteiner id={props.currentId} follow={props.follow} disabled={props.disableButtonFollow} followedToUser={props.profileFollowedToUser} />
					</div>

					{/* блок, про мене та роботу */}
					<div className={classes.aboutwork}>

						{/* блок про мене */}
						<div>
							<span className={classes.aboutworktitle}>about me : </span> <br />
							<span >{props.currentProfile.aboutMe}</span>
						</div>

						{/* блок, чи шукаю роботу */}
						<div>
							<span className={classes.aboutworktitle}> Looking For A Job? </span> <br />

							{/* перевіряю чи шукає роботу, і вивожу відповідний текст, так само вивожу текст опису тільки коли він є, якщо тексту опису немає вивожу пусту строку */}
							{props.currentProfile.lookingForAJob
								? <span> Yes I Doo </span>
								: <span> No I Don't </span>} <br />
							{props.currentProfile.lookingForAJobDescription
								? props.currentProfile.lookingForAJobDescription
								: '' }
						</div>
					</div>
					{/* блок контактів */}
					<div className={classes.contacts}>
						{contacts}
					</div>
				</div>
				// якщо в профайлі немає даних відмальовую лоадер
				: <Loader />

			}</div>
		</div>
	);
};

// експортую по дефолту
export default ProfileInfo;
