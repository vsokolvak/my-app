// імпортую необхідні компоненти
import React from "react";
import Follow from "./Follow";

// контейнерна компонента для фоллов,
// <FollowConteiner id={ } follow={ } disabled={ } followedToUser={ } />
// приймає в пропси
// id = ід юзера
// follow = булеве значення тру фолс для юзера
// disabled = булеве значення, тру фолс, чи активна кнопка, щоб блокувати пока виконується запит
// followedToUser = thank функція, яка підписуєтся на юзера або відписуєтся від нього, в залежності від значення фолоу

const FollowConteiner = (props) => {

	// функція, яка підписується на юзера або відписується від юзера
	const followAction = ( ) => {
		props.followedToUser( props.id, props.follow )
	}

	// повертаю жсх
	return(
		<Follow follow={props.follow} followAction={followAction} disabled={props.disabled} />
	)
}

// експортую за дефолтом
export default FollowConteiner