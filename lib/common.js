/**
 * Модуль с дополнительными функциями
 * @member common
 * @module common
 */

/**
 * Функция проверки устройства для получения выводимого типа изображений
 * @function getTypeDevice
 * @exports
 * @member common
 * @module common
 */
exports.getTypeDevice = data => {
	let result = 'webp';
	if (data.isiPad == 'true' || data.isiPod == 'true' || data.isiPhone == 'true' || data.isMac == 'true') {
		result = 'jpg';
	}
	return result;
};
