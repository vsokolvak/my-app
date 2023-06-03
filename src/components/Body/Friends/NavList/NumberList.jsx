// імпортую необхідні компоненти
import classes from "./NumberList.module.css";
import React from 'react';

// створюю класову компоненту Friends, 
class NumberList extends React.Component {
	// метод класової компоненти, який відпрацює при створені компоненти
	componentDidMount() {
		this.setPageNumberList(this.props.activePage)
	}

	getUsers(el){
		this.props.getUsers(el)
		this.setPageNumberList(el)
	}
	// метод компоненти, приймає в параметр активну сторінку, створює масив з номерами сторінок, та діспатчить його в стейт
	setPageNumberList(pageCount) {

		let pageNumberList = []
		// змінна лічильник, для кількості відображених сторінок, вибирає меньше значення між кількістю фактичною і максимальною
		let j = (this.props.pageCount < this.props.maxDisplayedPageCount ? this.props.pageCount : this.props.maxDisplayedPageCount)
		// змінна, в яку вносяться номери сторінок, якщо активна сторінка більше 1, тоді початковий номер зменшую на 1, щоб активна сторінка була по середині.
		let k = (pageCount === 1 ? pageCount : pageCount - 1)

		// це правка, для номера сторінки, коли він максимальний, щоб не виходив за межі
		if (pageCount === this.props.pageCount) k = k - 1

		// є така біда, коли максимальний номер сторінки = 1 треба така правка, щоб в 0 не виходити
		if (k === 0 ) k = 1

		// заповнюю масив змінними к, де кожна наступна збільшується на 1
		for (let i = 0; i < j; i++) {
			pageNumberList[i] = k
			k = k + 1
		}
		// діспатчу новий масив в стейт
		this.props.usersSetPageNumberList(pageNumberList)
	}
	// метод рендер
	render() {

		const pageList =
			this.props.pageNumberList.map((el) => {
				return (
					<span key={el} className={(el === this.props.activePage ? classes.activePageNumber : '') + ' ' + classes.pageNumber}
						onClick={() => { this.getUsers(el) }}>
						{el}
					</span>
				)
			})
		// змінна для формування стиля для ссилки навігації на 1 сторінку 
		let startStyleNone = {}
		if (this.props.activePage <= 2) startStyleNone.display = 'none'
		// змінна для формування стиля для ссилки навігації на останню сторінку 
		let endStyleNone = {}
		if (this.props.activePage >= this.props.pageCount - 1) endStyleNone.display = 'none'
		
		// повертаю жсх
		return (
					<div>
						{/* це елемент із ссилкоб на 1 сторінку, відображаться коли активні сторінки більше 2 */}
						<span
							className={classes.pageNumber}
							style={startStyleNone}
							onClick={() => { this.getUsers(1) }}>
							1 ...
						</span>

						{/* це навігація із номерами сторінок */}
						{pageList}

						{/* ссилка на останню сторінку, відображається коли активна сторінка менше останньої на 2 або більше */}
						<span className={classes.pageNumber}
							style={endStyleNone}
							onClick={() => { this.getUsers(this.props.pageCount) }} >
							... {this.props.pageCount}</span>
					</div>
		);
	}
};
// експортую компоненту по дефолту
export default NumberList
