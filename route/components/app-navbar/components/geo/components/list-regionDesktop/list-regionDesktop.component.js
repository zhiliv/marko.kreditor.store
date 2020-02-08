module.exports = {
  onMount() {
    hideEl('back-geo');
  }
};

/**
 * При выборе региона
 * @functon selectRegion
 * @exports
 */
module.exports.selectRegion = el => {
  emptyId('list-geo');
  //очистка списка регионов
  //while (document.getElementById(elementId)) el.removeChild(el.firstChild);
  let arg = { rid: el.target.getAttribute('rid') };
  //создание запроса
  let req = new XMLHttpRequest();
  //отправляем POST запрос
  req.open('POST', `/getCity/${arg.rid}`);
  //указываем заголовок;
  req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  //отправка параметров
  req.send(arg);
  //событие загрузки данных по запросу
  req.onload = res => {
    let arg = JSON.parse(res.target.response);
    console.log('TCL: arg', arg);
    fillListCity(arg);
  };
};

/**
 * Заполнение списков регионов
 * @function fillListCity
 */
const fillListCity = arg => {
  if (arg.typeDevice == 'desktop') {
    listCityForDesktop(arg.city);
  }
};

/**
 * Список регионов для компьюетров
 * @function listCityForDesktop
 * @param {Array} list спсок регионов
 */
const listCityForDesktop = list => {
  let viewCity = require('./../list-cityDesktop/list-cityDesktop');
  viewCity.renderSync({ list: list }).appendTo(document.getElementById('list-geo'));
};
