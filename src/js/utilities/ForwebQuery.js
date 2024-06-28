export default class ForwebQuery {
	appendData
	callback
	url
	session

	constructor(appendData, callback, url, sessid) {
		this.XHR = new XMLHttpRequest()
		this.DATA = new FormData()

		this.appendData = appendData
		this.callback = callback
		this.url = url
		this.session = sessid
	}

	init() {
		this.append()
		this.onready()
		this.send()
	}

	append() {
		this.appendData.forEach(item => this.DATA.append(item.name, item.content))
		this.DATA.append('sessid', this.session)
		console.log('q:', this.DATA.get('q'))
		console.log('action:', this.DATA.get('action'))
		console.log('sessid:', this.DATA.get('sessid'))
	}

	onready() {
		this.XHR.onreadystatechange = () => {
			if (this.XHR.readyState === 4) {
				this.callback(this.XHR.response)
				return
				// Для отладки кода
				// this.callback(
				// 	'<div class="dropdown__item">' +
				// 		'<div class="dropdown__category">Услуга</div>' +
				// 		'<ul class="dropdown__list">' +
				// 		'<li data-category="Услуга" data-id="104071">Внутривенные инфузии (струйные) без учета' +
				// 		'стоимости лекарственного препарата</li>' +
				// 		'<li data-category="Услуга" data-id="104064">Внутримышечные инъекции</li>' +
				// 		'<li data-category="Услуга" data-id="104065">Забор крови из&nbsp;вены </li>' +
				// 		'<li data-category="Услуга" data-id="104062">Внутривенные инфузии (капельные) (физ р-р 0,9%' +
				// 		'или р-р глюкозы 5%)-800,0</li>' +
				// 		'<li data-category="Услуга" data-id="104025">Промывание инфузионного порта с&nbsp;использованием' +
				// 		'иглы СУРИКАНА.</li>' +
				// 		'</ul>' +
				// 		'</div>' +
				// 		'<div class="dropdown__item">' +
				// 		'<div class="dropdown__category">Специалист</div>' +
				// 		'<ul class="dropdown__list">' +
				// 		'<li data-category="Специалист" data-id="id-021">Гладков Олег Александрович</li>' +
				// 		'<li data-category="Специалист" data-id="id-022">Мельникова Виктория Владимировна</li>' +
				// 		'<li data-category="Специалист" data-id="id-023">Королев Владимир Николаевич</li>' +
				// 		'<li data-category="Специалист" data-id="id-024">Райгородский Максим Владимирович</li>' +
				// 		'<li data-category="Специалист" data-id="id-025">Королева Лариса Валерьевна</li>' +
				// 		'</ul>' +
				// 		'</div>' +
				// 		'<div class="dropdown__item">' +
				// 		'<div class="dropdown__category">Специализация</div>' +
				// 		'<ul class="dropdown__list">' +
				// 		'<li data-category="Специализация" data-id="id-031">Онкология</li>' +
				// 		'<li data-category="Специализация" data-id="id-031">Онкогинекология</li>' +
				// 		'<li data-category="Специализация" data-id="id-031">Гинекология</li>' +
				// 		'<li data-category="Специализация" data-id="id-031">Ультразвуковое исследование</li>' +
				// 		'<li data-category="Специализация" data-id="id-031">Хирургия</li>' +
				// 		'</ul>' +
				// 		'</div>'
				// )
			}
		}
	}

	send() {
		this.XHR.open('POST', this.url, true)
		this.XHR.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
		this.XHR.send(this.DATA)
	}
}
