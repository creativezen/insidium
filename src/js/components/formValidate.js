// Показываем окно успешной отправки
// =======================================
export function showSuccess(form) {
	// Вызываем метод включения сообщения об отправке
	window.modal.success()
	console.log('Блок с сообщением об успешной отправке', window.modal.modalContainer)
}

export function showError(form) {
	// Вызываем метод включения сообщения об отправке
	window.modal.error()
	console.log('Блок с сообщением об ошибке', window.modal.modalContainer)
}
