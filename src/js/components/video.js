export const Modal = function () {
	let model = {
		container: null,
		playButton: [],
		videoId: '',
		videoTitle: '',
		iframe: '',
		createIframe() {
			return `
				<iframe
				id="video-iframe"
				class="modal-video__iframe"
				src="https://www.youtube.com/embed/${this.videoId}"
				title="${this.videoTitle}"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
				</iframe>
				`
		}
	}

	function init() {
		// Находим контейнер для вставки плеера
		model.container = document.getElementById('modal-video')
		// Находим кнопку play
		model.playButton = [...document.querySelectorAll('.js-play-video')]
		// Слушаем клик по кнопке play
		model.playButton.forEach(button => {
			button.addEventListener('click', startVideo)
		})
	}

	// Вставляем плеер и передаём в него соответствующие данные
	function startVideo(e) {
		if (e.target.closest('.js-play-video')) {
			model.videoId = this.dataset.id
			model.videoTitle = this.dataset.title
			model.container.insertAdjacentHTML('beforeend', model.createIframe())

			// сохраняем в глобальный объект modal контейнер с ютуб плеером, чтобы при вызове внутри него метода modal.close() удалить проигрыватель из разметки
			window.modal.modalVideo = model.container
		}
	}

	init()
}
