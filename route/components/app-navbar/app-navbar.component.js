module.exports = {
  onMount() {
    dropdown();
    navActive(this.input.navActive.parent);
  }
};

/**
 *  подключение dropdown вкладок меню
 * @function dropdown()
 * */
const dropdown = () => {
  //получение авсех dropdown
  let elems = document.querySelectorAll('.dropdown-trigger');
  //указание что это dropdown
  M.Dropdown.init(elems, { coverTrigger: false, constrainWidth: false });
};

/**
 * добавление класса active к выбранной вкладке
 * @function navActive
 * @param {String} arg  список вкладок
 */
const navActive = arg => {
  //получение элементов по селектору
  let elems = document.querySelectorAll('.hide-on-med-and-down > li');
  //перебор массим
  Array.prototype.forEach.call(elems, function(el, i) {
    //првоерка текста элемента
    if (el.innerText == arg || el.childNodes[0].textContent == arg + `arrow_drop_down`) {
      //при соответствии значения элемента аргументу добаляем класс
      el.classList.add('active');
    }
  });
};
