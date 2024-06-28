

class View {

	// сздесь будет фильтр, с которым взаимодействует пользователь
	filter = null
	// здесь будет чекбокс, с которым взаимодействует пользователь
	checkbox = null

	element = {
		// нашли все табы на странице
		tabs: [...document.querySelectorAll('.js-filter[data-type="tabs"]')]
	}

	setFilter(checkbox, filter) {
		this.filter = document.querySelector(`.js-filter[data-filter="${filter}"]`)
		
		this.checkbox?.value === checkbox.value ? this.checkbox = null : this.checkbox = checkbox
		console.log(this.checkbox)

		// if (target.target.closest('input')) {
		// 	console.log(target.target.closest('input'))
		// }
	}
}

// controller for filter tabs
export function tabs() {
	const view = new View()
	
	view.element.tabs.forEach(tab => {
		tab.addEventListener('mousedown', function(e) {
			let checkbox = e.target.closest('label').querySelector('input')
			view.setFilter(checkbox, this.dataset.filter)
		})
	})
}