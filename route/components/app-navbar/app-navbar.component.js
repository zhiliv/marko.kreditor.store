module.exports = {
  onMount() {
    let active = this.input.navActive;
    sidenav();
    dropdown();
    collapsible();
    navActive(active.parent);
    navActiveSidenav(active);
  }
};

/**
 *  подключение dropdown вкладок меню
 * @function dropdown()
 * */
const dropdown = () => {
  //получение авсех dropdown
  let elems = getSelAll('.dropdown-trigger');
  //указание что это dropdown
  M.Dropdown.init(elems, { coverTrigger: false, constrainWidth: false });
};

/**
 * добавление растягивающегося всплывающего меню
 * @function collapsible
 */
const collapsible = () => {
  var elems = getSelAll('.collapsible');
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
  let elems = getSelAll('.hide-on-med-and-down > li');
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
 * Добавление класса active для sideNav
 * @function navActiveSidenav
 */
const navActiveSidenav = arg => {
  let elA = getSelAll('.sidenav a');
  //перебор массим
  Array.prototype.forEach.call(elA, function(el, i) {
    //првоерка текста элемента
    if (el.innerText == arg.child || el.childNodes[0].textContent == arg.child) {
      //при соответствии значения элемента аргументу добаляем класс
      el.classList.add('active');
    }
  });

  let elDIV = getSelAll('.sidenav .collapsible-header');
  //перебор массим
  Array.prototype.forEach.call(elDIV, function(el, i) {
    //првоерка текста элемента
    if (el.innerText == arg.parent || el.childNodes[0].textContent == arg.parent) {
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
  let elems = getSelAll('.sidenav');
  //активация боковой навигации
  M.Sidenav.init(elems);
};
