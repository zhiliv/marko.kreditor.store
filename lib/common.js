/**
 * Модуль с дополнительными функциями
 * @member common
 * @module common
 */

//модуль для работы с запросами в БД
const query = require('./queryDB');
//модуль для работы с ассинхронными функуиями
const q = require('q');
//бибдиотека для обработки данных
const _ = require('underscore');
//модуль для ассинхронной обработки данных
const async = require('async');

/**
 * Функция проверки устройства для получения выводимого типа изображений
 * @function getTypeImg
 * @exports
 * @member common
 * @module common
 */
exports.getTypeImg = data => {
  let result = 'webp';
  if (data.isiPad == 'true' || data.isiPod == 'true' || data.isiPhone == 'true' || data.isMac == 'true') {
    result = 'jpg';
  }
  return result;
};

/**
 * Функция проверки типа устройства
 * @function getTypeDevice
 * @exports
 * @member common
 * @module common
 */
exports.getTypeDevice = data => {
  let result = 'desktop';
  if (data.isMobile == 'true') {
    result = 'mobile';
  }
  if (data.isTablet == 'true') {
    result = 'tablet';
  }
  if (data.isDesktop == 'true') {
    result = 'desktop';
  }
  return result;
};

/**
 * Получение всех активных категорий продуктов
 * @function getTypeCategory
 * @exports
 * @async
 * @memberof common
 * @return {Array} список активных категорий продуктов
 */
exports.getAllProduct = async () => {
  let defer = q.defer();
  let sql = 'SELECT *  FROM kreditproducts WHERE STATUS="true"';
  await query.select(sql).then(async res => {
    //массив для хранения результата
    let arr = [];
    //группируем данные по ипу продукта
    let data = await _.groupBy(res.data, 'typeproduct');
    //получаем ключи результата(типы продуктов являются ключами)
    let listKeys = _.keys(data);
    //обход значений и формирование массива
    async.eachOfSeries(listKeys, async (row, ind) => {
      //создаем объект для формирвоания спска
      let obj = {
        //тип продукта
        typeProduct: row,
        //список продуктов этой категории продуктов
        list: data[row]
      };
      //добавление объекта в массив
      arr.push(obj);
    });
    //добавление результата в ожидание
    defer.resolve(arr);
  });
  //возврат результата
  return defer.promise;
};

/**  Полученмие списка навигационного меню сгурппирвоанного по родительскому менюы
 * @async
 * @function getNavBar
 * @memberof common
 * @exports
 * @return {Array} список элементов меню навигации
 */
exports.getNavBar = async () => {
  //создание ожидания
  let defer = q.defer();
  //текст запроса
  let sql = 'SELECT *  FROM navbar';
  let list;
  //выборка
  query.select(sql).then(async res => {
    //массив для хранения результата
    let arr = [];
    //группирвоака данных по главным разделам
    let data = _.groupBy(res.data, 'parent');
    //получаем ключи результата(типы продуктов являются ключами)
    let listKeys = _.keys(data);
    //перебор всех записей
    await async.eachOfSeries(listKeys, async (row, ind) => {
      //групирока данных
      let group = _.where(res.data, { parent: row });
      //со0здание объекта
      let obj = {};
      //проверка длины группы
      if (group.length == 1) {
        //присовение объекту значения группы
        obj = group[0];
        //очистка свойства 'list'
        obj.list = [];
      } else {
        //присовение обхекту значения
        obj = {
          //зачение родителя
          parent: row,
          //устанвока стутуса родителя
          //список подменю
          list: group
        };
      }
      //добавление в массив объекта
      arr.push(obj);
    });
    defer.resolve(arr);
  });

  return defer.promise;
};

/**
 * Получение 9 случайных кредитных продуктов
 * @function getRandomProduct
 * @memberof common
 * @exports
 * @return {Array} список кредитныз продуктов
 */
exports.getRandomProduct = async () => {
  let defer = q.defer();
  let sql = 'SELECT * FROM kreditproducts WHERE status="true" ORDER BY RAND() LIMIT 3';
  await query.select(sql).then(res => {
    defer.resolve(res.data);
  });
  return defer.promise;
};

/**
 * Получение списка регионов
 * @function getRegions
 * @memberof common
 * @exports
 * @return {Array} список регионов
 */
exports.getRegions = async () => {
  let defer = q.defer();
  let sql = 'SELECT * FROM geoproduct WHERE status="true" GROUP BY region_name';
  let list;
  await query.select(sql).then(res => {
    list = res.data;
  });
  await processingGeo(list).then(res => {
    defer.resolve(res);
  });
  return defer.promise;
};

/**
 * Обрабока полученных регионов
 * @function processingRegions
 * @param {Array} list список регионов
 * @return {Object} объект со списком
 */
const processingGeo = async list => {
  let defer = q.defer();
  let count = Math.ceil(list.length / 2);
  let result = { b1: [], b2: [] };
  let indexB = 0;
  let t = 0;
  await async.eachOfSeries(list, async (row, ind) => {
    if (indexB == 0) {
      if (t < count) {
        await result.b1.push(row);
        t++;
      } else {
        t = 0;
        indexB++;
      }
    }
    if (indexB == 1) {
      if (t < count) {
        await result.b2.push(row);
        t++;
      } else {
        t = 0;
        indexB++;
      }
    }
    if (ind == list.length - 1) {
      defer.resolve(result);
    }
  });
  return defer.promise;
};

/**
 * получение списка городов региона
 * @function getCity
 * @return {Array} список городов
 */
exports.getCity = async arg => {
  let defer = q.defer();
  let sql = `SELECT * FROM geoproduct WHERE rid=${arg.rid} AND city_name != '' AND status='true' GROUP BY city_name`;
  let list;
  await query.select(sql).then(res => {
    list = res.data;
  });
  await processingGeo(list).then(res => {
    defer.resolve(res);
  });
  return defer.promise;
};

/**
 * пполучение типа устройства
 * @function getTypeDevice
 * @exports
 * @param {Object} arg
 * @param {Object} arg.ctx Параметры useragent
 */
exports.getTypeDevice = arg => {
  let result = '';
  if (arg.isDesktop) {
    result = 'desktop';
  }
  if (arg.isTablet || arg.isMobile) {
    result = 'mobile';
  }
  if (result == '') {
    result = 'desktop';
  }
  return result;
};

/**
 * Получение списка всех городов
 * @function getAllCity
 * @exports
 * @async
 * @return {Array} список всех городов
 */
exports.getAllCity = async () => {
  let defer = q.defer();
  let sql = `SELECT * FROM geoproduct WHERE STATUS='true' AND city_name!='' GROUP BY city_name`;
  let list;
  await query.select(sql).then(res => {
    list = res.data;
  });
  await procesingAllCity(list).then(res => {
    defer.resolve(res);
  });
  return defer.promise;
};

/**
 * Формирование списка всех гордов с облостями
 * @function procesingAllCity
 * @async
 * @return {Array} список всех городов и регионов
 */
const procesingAllCity = async list => {
  let defer = q.defer();
  let result = {};
  await async.eachOfSeries(list, async (row, ind) => {
    result[`${row.city_name}(${row.region_name})`] = null;
  });
  defer.resolve(JSON.stringify(result));
  return defer.promise;
};
