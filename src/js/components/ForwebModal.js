import Scroll from '../utilities/ForwebScroll'

export default class ForwebModal {
	constructor(options, mainStage) {
		let defaultOptions = {
			isOpen: () => {},
			isClose: () => {}
		}

		this.options = Object.assign(defaultOptions, options)
		this.modal = document.querySelector(`.${mainStage}`)
		this.modalSuccess = document.querySelector('.js-modal-success')
		this.modalError = document.querySelector('.js-modal-error')
		this.modalVideo = null
		this.speed = 300
		this.animation = 'fade'
		this._reOpen = false
		this._nextContainer = false
		this.modalContainer = false
		this.modalContent = false
		this.isOpen = false
		this.previousActiveElement = false
		this._focusElements = [
			'a[href]',
			'input',
			'select',
			'textarea',
			'button',
			'iframe',
			'[contenteditable]',
			'[tabindex]:not([tabindex^="-"])'
		]

		// this._fixBlocks = document.querySelectorAll('.fix-block')
		this.scroll = new Scroll()
		this.init()
	}

	init() {
		if (this.modal) {
			document.addEventListener(
				'click',
				function (e) {
					const clickedElement = e.target.closest(`[data-forweb-path]`)
					if (clickedElement) {
						let target = clickedElement.dataset.forwebPath
						let animation = clickedElement.dataset.forwebAnimation
						let speed = clickedElement.dataset.forwebSpeed
						this.animation = animation ? animation : 'fade'
						this.speed = speed ? parseInt(speed) : 300
						this._nextContainer = document.querySelector(
							`[data-forweb-target="${target}"]`
						)
						this.open()
						return
					}

					if (e.target.closest('.js-close')) {
						this.close()
						return
					}
				}.bind(this)
			)

			window.addEventListener(
				'keydown',
				function (e) {
					if (e.keyCode == 27 && this.isOpen) {
						this.close()
					}

					if (e.which == 9 && this.isOpen) {
						this.focusCatch(e)
						return
					}
				}.bind(this)
			)

			document.addEventListener(
				'click',
				function (e) {
					if (
						e.target.classList.contains('forweb-modal') &&
						e.target.classList.contains('is-open')
					) {
						this.close()
					}
				}.bind(this)
			)
		}
	}

	open(selector) {
		this.previousActiveElement = document.activeElement

		if (this.isOpen) {
			this.reOpen = true
			this.close()
			return
		}

		this.modalContainer = this._nextContainer
		this.modalContent = this.modalContainer.querySelector(
			'.forweb-modal__content'
		)

		if (selector) {
			this.modalContainer = document.querySelector(
				`[data-forweb-target="${selector}"]`
			)
		}

		this.modal.style.setProperty('--transition-time', `${this.speed / 1000}s`)
		this.modal.classList.add('is-open')

		document.body.style.scrollBehavior = 'auto'
		document.documentElement.style.scrollBehavior = 'auto'

		this.scroll.disable()

		this.modalContainer.classList.add('forweb-modal-open')
		this.modalContainer.classList.add(this.animation)

		setTimeout(() => {
			this.options.isOpen(this)
			this.modalContainer.classList.add('animate-open')
			this.isOpen = true
			// this.focusTrap();
		}, this.speed)
	}

	close() {
		if (this.modalContainer) {
			this.modalContainer.classList.remove('animate-open')
			this.modalContainer.classList.remove(this.animation)
			this.modal.classList.remove('is-open')
			this.modalContainer.classList.remove('forweb-modal-open')

			this.scroll.enable()

			document.body.style.scrollBehavior = 'auto'
			document.documentElement.style.scrollBehavior = 'auto'

			this.options.isClose(this)
			this.isOpen = false
			// this.focusTrap();

			if (this.reOpen) {
				this.reOpen = false
				this.open()
			}

			if (this.modalVideo) {
				this.modalVideo.innerHTML = null
			}
		}
	}

	focusCatch(e) {
		const nodes = this.modalContainer.querySelectorAll(this._focusElements)
		const nodesArray = Array.prototype.slice.call(nodes)
		const focusedItemIndex = nodesArray.indexOf(document.activeElement)
		if (e.shiftKey && focusedItemIndex === 0) {
			nodesArray[nodesArray.length - 1].focus()
			e.preventDefault()
		}
		if (!e.shiftKey && focusedItemIndex === nodesArray.length - 1) {
			nodesArray[0].focus()
			e.preventDefault()
		}
	}

	focusTrap() {
		const nodes = this.modalContainer.querySelectorAll(this._focusElements)
		if (this.isOpen) {
			if (nodes.length) nodes[0].focus()
		} else {
			this.previousActiveElement.focus()
		}
	}

	success() {
		if (this.modalSuccess) {
			this._nextContainer = document.querySelector('.js-modal-success')
			this.open('modal-success')
		}
	}
	
	error() {
		if (this.modalError) {
			this._nextContainer = document.querySelector('.js-modal-error')
			this.open('modal-error')
		}
	}
}
