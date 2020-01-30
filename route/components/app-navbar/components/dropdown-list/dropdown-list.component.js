module.exports = {
  onMount() {
    let arg = this.input.navActive.child;
    if (arg) {
      navDropdownItemActive(arg);
    }
  }
};

/**
 * Выбор активного пуккта в списке dropdown
 * @function navDropdownItemActive
 * @param {String} arg Имя пункта меню
 */
const navDropdownItemActive = arg => {
  //получение элементов по селектору
  let elems = document.querySelectorAll('.dropdown-content > li a');
  //перебор массим
  Array.prototype.forEach.call(elems, function(el, i) {
    //првоерка текста элемента
    if (el.innerText == arg) {
      //при соответствии значения элемента аргументу добаляем класс
      el.classList.add('active');
    }
  });
};
