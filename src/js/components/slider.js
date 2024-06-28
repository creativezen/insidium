import Swiper, {
	Autoplay,
	FreeMode,
	Navigation,
	Pagination,
	Thumbs
} from 'swiper'

Swiper.use([Pagination, Navigation, Thumbs, FreeMode, Autoplay])

export const main = function () {
	let slidersArray = Array.from(document.querySelectorAll('.js-slider'))

	if (slidersArray.length) {
		slidersArray.forEach(slider => {
			let sliderName = slider.dataset.sliderName
			let sliderSelector = `[data-slider-name="${sliderName}"]`
			let sliderItems = document.querySelector(`${sliderSelector}`).dataset.sliderItems

			// Если кол-во просматриваемых слайдов больше 1, то выводим указанное кол-во, а иначе 'auto'
			let numPerView =
				sliderItems > 1 || sliderItems == 1 ? sliderItems : 'auto'

			new Swiper(sliderSelector, {
				freeMode: true,
				spaceBetween: 10,
				observer: true,
				observeParents: true,
				navigation: {
					nextEl: `.slider-btn.next-${sliderName}`,
					prevEl: `.slider-btn.prev-${sliderName}`
				},
				pagination: {
					el: `.slider-pagination-${sliderName}`,
					type: 'fraction'
				},
				breakpoints: {
					680: {
						// freeMode: true,
						slidesPerView: numPerView > 1 ? 2 : 'auto',
						spaceBetween: 20,
					},
					1080: {
						slidesPerView: numPerView > 1 ? 3 : 'auto',
						spaceBetween: 20,
					},
					1280: {
						slidesPerView: numPerView,
						spaceBetween: 20,
					}
				}
			})
		})
	}
}
