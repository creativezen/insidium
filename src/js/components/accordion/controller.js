import View from './view.js'
import Model from './model.js'

export function init() {
	const view = new View()
	const model = new Model()

	// бежим по аккордеонам
	view.element.accordions.forEach(accordion => {
		accordion.addEventListener('click', function (e) {
			let currentItem = e.target.closest('[data-item]')

			view.showAccordion(currentItem)
		})
	})
}
