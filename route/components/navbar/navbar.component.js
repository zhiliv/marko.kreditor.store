module.exports = class {
	/**
	 * при открытии домолнительного меню
	 * @function onOpenDropdown
	 * @param {Object} hl Событие
	 * @param {Object} el Элемент
	 */
	onOpenDropdown(hl, el) {
		//получение высоты экрана
		let w = window.innerWidth;
		//проверка размера
		if (w <= 991.98) {
			//получение выпадающего меню
			let dm = document.getElementsByClassName('dropdown-menu');
			//перебор всех значений вслывающего меню
			for (let index = 0; index < dm.length; index++) {
				//получение элемента
				let elt = dm[index];
				//скрыть список
				elt.style.display = 'none';
			}
			//получение выбраранного пункта меню
			let t = el.getElementsByClassName('dropdown-menu')[0];
			//устанвока ширинры
			t.style.width = '90vw';
			//показать блок меню
			t.style.display = 'block';
			//получение элементов выбранного всоывающего меню
			let sy = t.getElementsByClassName('dropdown-item');
			//перебор всех значений выбранного вслывающего меню
			for (let index = 0; index < sy.length; index++) {
				//получение элемента
				let elt = sy[index];
				//показать элементы
				elt.style.display = 'block';
			}
		}
	}
	/*  */

	/**
	 * При нажатии на бургер меню
	 * @function onOpenNav
	 */
	onOpenNav() {
		//получение состава меню
		let st = document.getElementsByClassName('navbar-toggler')[0];
		//получение встроенног оменю коллапс
		let nav = document.getElementsByClassName('navbar-collapse')[0];
		//првоерка наличия класса
		if (st.classList.contains('open')) {
			//сткрытие элемента
			nav.style.display = 'none';
			//удаление класса
			st.classList.remove('open');
		} else {
			//показать элемент
			nav.style.display = 'block';
			//добалвение класса
			st.classList.add('open');
		}
	}
};
