export default class View {

	// сздесь будет фильтр, с которым взаимодействует пользователь
	filter = {}

	controls = {}
	
	element = {
		// нашли все табы на странице
		tabs: document.querySelectorAll('.js-filter[data-type="tabs"]')
	}

	setFilter(filter) {
		this.filter = {
			...this.filter,
			[filter]: document.querySelector(`.js-filter[data-filter="${filter}"]`)
		}

		this.controls = {
			...this.controls,
			[filter]: this.filter[filter].querySelectorAll('input[type="checkbox"]:not([value="reset"])')
		}
	}
	
	reset(filter) {
		this.controls[filter].forEach(checkbox => {
			checkbox.checked = false
		})
	}
}