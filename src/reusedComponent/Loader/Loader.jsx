import classes from "./Loader.module.css";

const Loader = () => {
	
	let loader = []
	for (let i = 0; i < 10; i++) {
		loader[i] = <div
			key={i}
			className={classes.loaderItems}
			style={{ transform: `rotate(${360 / 10 * i}deg)` }}
		>
		</div>
	}

	return(
		<div className = { classes.loaded } >
			{ loader }
		</div>
	)
}

export default Loader