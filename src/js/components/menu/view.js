export class View {
	menu = {
		burger: null,
		main: null,
		mobile: null,
		list: null,
		links: null,
		close: null
	}

	init() {
		this.menu.burger = document.getElementById('menu-burger')
		this.menu.main = document.getElementById('main-navigation')
		this.menu.mobile = document.getElementById('mobile-navigation')
		this.menu.list = document.getElementById('mobile-navigation-list')
		this.menu.close = document.getElementById('menu-mobile-close')
		this.duplicate()
	}

	duplicate() {
		this.menu.links = this.menu.main.querySelectorAll('a')
		return this.menu.links
	}

	append() {
		this.menu.links.forEach(link => {
			let linkHTML = `
				<a href="${link.href}">${link.textContent}</a>
			`
			this.menu.list.insertAdjacentHTML('beforeend', linkHTML)
		})
	}

	open() {
		this.menu.mobile.classList.add('active')
	}

	close() {
		this.menu.mobile.classList.remove('active')
		this.menu.list.innerHTML = ''
	}
}
