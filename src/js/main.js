import './_vendor'
// Решения FORWEB.AGENCY
import ForwebModal from './components/ForwebModal'
import * as dropdown from './components/dropdown'
import * as video from './components/video'
import * as filter from './components/filter/controler'
import * as accordion from './components/accordion/controller'
import * as menu from './components/menu/controler'

// Сторонние решения
// import * as slider from './components/slider'

// Модель классов для решений FORWEB.AGENCY
const FORWEB_UI = {
  modal: 'forweb-modal',
}

window.addEventListener('DOMContentLoaded', function () {
	// Создали экземпляры объектов
	const modal = new ForwebModal(null, FORWEB_UI.modal)

	// Поместили экземпляр класса ForwebModal в глобальную область видимости
	window.modal = modal

	filter.tabs()
	// slider.main()
	dropdown.simple()
	video.Modal()
	accordion.init()
	menu.mobile()
})
