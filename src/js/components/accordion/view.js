import { AnimationHeight } from "../../utilities/ForwebAnimation"

export default class View {
	element = {
		accordions: document.querySelectorAll('.js-accordion'),
		target: null
	}

	showAccordion(accordion) {
		this.target = accordion.querySelector('[data-target]')
		new AnimationHeight(this.target)
		accordion.dataset.item = 'open'
	}
}
