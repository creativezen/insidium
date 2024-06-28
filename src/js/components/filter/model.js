export default class Model {
	// здесь будет чекбокс, с которым взаимодействует пользователь
	filterList = {}

	compareFilter(filter, checkbox) {
		if (!Object.keys(this.filterList).length) return false
		return this.filterList[filter].find(filter => filter === checkbox.value)
	}

	deleteFilter(filter, checkbox) {
		let index = this.filterList[filter].findIndex(filter => filter === checkbox.value)
		this.filterList[filter].splice(index, 1)
	}

	addFilter(filter, checkbox) {
		let filterArray = Object.getOwnPropertyNames(this.filterList)
		// this.filterList = {
		// 	...this.filterList,
		// 	[filter]: [...this.filterList[filter]].push(checkbox.value)
		// }

		console.log(filterArray.length)
	}

	reset(filter) {
		this.filterList[filter] = []
	}
}