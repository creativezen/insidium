import {View} from './view'

export function mobile() {
	const view = new View
	view.init()
	
	view.menu.burger.addEventListener('click', function (e) {
		view.append()
		view.open()
		console.log(view.menu.mobile)
	})

	view.menu.close.addEventListener('click', function (e) {
		view.close()
	})
}
