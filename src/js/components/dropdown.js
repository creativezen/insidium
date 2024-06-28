let model = {
	opened: false,
	activeDropdown: null,
}

export function simple() {
	// слушаем событие клик по документу
	document.addEventListener('click', function(e) {
		// если клик по кнопке выпадающего списка
		if(e.target.closest('.js-dropdown [data-button]')) {
			e.stopPropagation()
			// сохраняем локально текущий выпадающий список
			model.activeDropdown = e.target.closest('.js-dropdown')
			// меняем состояние выпадающего списка
			dropdownSwitch(model.activeDropdown)
			// выходим из сценария
			return
		}

		// если какой-то выпадающий список открыт
		if(model.opened) {
			// скрвыем список
			model.activeDropdown.classList.remove('active')
			// меняем состояние в модели
			model.opened = false
		}
	})
}
	
function dropdownSwitch(dropdown) {
	if(model.opened) {
		dropdown.classList.remove('active')
		model.opened = false
	}
	else {
		dropdown.classList.add('active')
		model.opened = true
	}
}