module.exports = {
  onMount() {
    setHeight();
  }
};

/**
 * Установка одинаковой высоты для блоков
 * @function setHeight
 */
const setHeight = () => {
  //получение списка элементов
  let list = document.querySelectorAll('.product');
  //переменная для хренения максимальной высоты
  let max = 0;
  //обход всех элементов для получения максимального значения высоты
  Array.prototype.forEach.call(list, function(el, i) {
    //поулчение высоты элемента
    let h = parseFloat(getComputedStyle(el, null).height.replace('px', ''));
    //проверка на максимальную высоту
    if (h > max) max = h;
  });
  //обход всех элементов
  Array.prototype.forEach.call(list, function(el, i) {
    //установка высоты элементов
    el.style.height = max;
  });
};
