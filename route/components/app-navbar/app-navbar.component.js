module.exports = {
  onMount() {
    sidenav();
    dropdown();
    collapsible();
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
 * добавление растягивающегося всплывающего меню
 * @function collapsible
 */
const collapsible = () => {
  var elems = document.querySelectorAll('.collapsible');
  let list = M.Collapsible.init(elems, {
    //событие при открытии выпадающего списка
    onOpenStart: el => {
      //перебор всех элементов
      list.forEach(row => {
        //закрытие списка
        row.close();
      });
    }
  });
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

/**
 * Инициализация sidenav
 * @function sidenav
 */
const sidenav = () => {
  //получение всех элементов
  let elems = document.querySelectorAll('.sidenav');
  //активация боковой навигации
  M.Sidenav.init(elems);
};
