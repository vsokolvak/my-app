// імпортую необхідні компоненти
import React from "react";
import Autorize from "./Autorize";
import { connect } from "react-redux";
import { compose } from "redux";

const AutorizeConteiner = (props) => {

	// повертаю жсх
	return(
		<div>
			<Autorize {...props} />
		</div>
	)
}

const mapDispatchToProps = (state) => {
	return({
		state: state,
	})
}


// експортую за дефолтом
export default compose(connect(mapDispatchToProps))(AutorizeConteiner)