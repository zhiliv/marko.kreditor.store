module.exports = {
  onMount() {
    modal();
    hideEl('back-geo');
  }
};

module.exports.getRegions = () => {
  //получение координат пользователя
  navigator.geolocation.getCurrentPosition(show_map);
  //создание запроса
  let req = new XMLHttpRequest();
  //отправляем POST запрос
  req.open('POST', '/getRegions');
  //указываем заголовок;
  req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  //отправка параметров
  req.send();
  //событие загрузки данных по запросу
  req.onload = res => {
    let arg = JSON.parse(res.target.response);
    fillListRegions(arg);
  };
};

/**
 * Список регионов для компьюетров
 * @function listForDesctop
 * @param {Array} list спсок регионов
 */
const listRegionForDesktop = list => {
  emptyId('list-geo');
  let view = require('./components/list-regionDesktop/list-regionDesktop');
  view.renderSync({ list: list }).appendTo(document.getElementById('list-geo'));
};

/**
 * Заполнение списков регионов
 * @function fillListRegions
 */
const fillListRegions = arg => {
  if (arg.typeDevice == 'desktop') {
    listRegionForDesktop(arg.regions);
  }
};

/**
 * Получение координат пользтователья
 * @function show_map
 */
const show_map = position => {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  // Посмотрим карту или сделаем что-нибудь интересное!
};

const modal = () => {
  let elem = document.getElementById('m-geo');
  M.Modal.init(elem);
};

//http://whatsthere.maps.sputnik.ru/point?blat=51.3043518&blon=37.89045358&lat=51.3043518&lon=37.8904535
