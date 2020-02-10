module.exports = {
  onMount() {
    chkWidth();
    modal();
    hideEl('back-geo');
    window.onresize = event => {
      chkWidth();
    };
  }
};

/**
 * Поиск города
 * @function searchCity
 */
const searchCity = list => {
  let elem = getId('search-city');
  M.Autocomplete.init(elem, {
    data: list,
    onAutocomplete: data => {
      getCityAndRegionName(data);
    }
  });
};

/**
 * Получение выбранного города и региона
 * @function getCityAndRegionName
 */
const getCityAndRegionName = data => {};

/**
 * Получение всех гордов
 * @function getAllCity
 */
const getAllCity = () => {
  post('/getAllCity', null, res => {
    searchCity(JSON.parse(res.list));
  });
};

/**
 * проверка ширины экрана
 * @function chkWidth
 */
const chkWidth = () => {
  window.innerWidth > 992 ? showEl('b-geo') : hideEl('b-geo');
};

module.exports.getRegions = () => {
  //получение координат пользователя
  navigator.geolocation.getCurrentPosition(show_map);
  post('/getRegions', null, res => {
    fillListRegions(res);
    getAllCity();
  });
};

/**
 * Список регионов для компьюетров
 * @function listForDesctop
 * @param {Array} list спсок регионов
 */
const listRegionForDesktop = list => {
  emptyId('list-geo');
  let view = require('./components/list-regionDesktop/list-regionDesktop');
  view.renderSync({ list: list }).appendTo(getId('list-geo'));
};

/**
 * Заполнение списков регионов
 * @function fillListRegions
 */
const fillListRegions = arg => {
  if (window.innerWidth > 992) {
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
  let elem = getId('m-geo');
  M.Modal.init(elem);
};

//http://whatsthere.maps.sputnik.ru/point?blat=51.3043518&blon=37.89045358&lat=51.3043518&lon=37.8904535
