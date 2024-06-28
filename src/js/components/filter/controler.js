import View from './view'
import Model from './model'

// controller for filter tabs
export function tabs() {
	const view = new View()
	const model = new Model()
	
	view.element.tabs.forEach(tab => {
		tab.addEventListener('mousedown', function(e) {
			// получаем целевой элемент
			let checkbox = e.target.closest('label').querySelector('input')

			if (checkbox.value === 'reset') {
				model.reset(this.dataset.filter)
				view.reset(this.dataset.filter)
			}

			// сохраним текущий фальтр целиком
			view.setFilter(this.dataset.filter, checkbox)

			// проверим наличие параметра в модели
			model.compareFilter(this.dataset.filter, checkbox)
				// если параметр был добавлени, удали его выкл.
				? model.deleteFilter(this.dataset.filter, checkbox)
				// если не был добавлен, добавим его вкл.
				: model.addFilter(this.dataset.filter, checkbox)
		})
	})
}