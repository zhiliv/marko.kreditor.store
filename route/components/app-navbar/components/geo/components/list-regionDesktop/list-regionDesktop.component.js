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
  let arg = { rid: el.target.getAttribute('rid') };
  post(`/getCity/${arg.rid}`, arg, res => {
    fillListCity(res);
  });
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
  viewCity.renderSync({ list: list }).appendTo(getId('list-geo'));
};
