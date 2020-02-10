/**
 * Модуль для робработки GET запросов
 * @member queryGET
 * @module queryGET
 */

'use strict';

//получение приложения Koa
var app = require('./server');
//получение корнеовго каталога
const appRoot = require('app-root-path');
//подключение модуля для маршрутизации koa
const Router = require('koa-router');
//подключение модуля для монтирования папок общего доступа koa
const mount = require('koa-mount');
//подключение модуля для расширивания папки общего доступа koa
const serve = require('koa-static');
//подклчючение модуля для работы с gzip
const { createGzip } = require('zlib');
//модуль для получения данных user-agent
const userAgent = require('koa2-useragent');
//дополнительные функции
const fn = require('./common.js');

//создание маршрутизоватора
let router = new Router();
app.use(userAgent());
//установка роутера для приложения Koa
app.use(router.routes()).use(router.allowedMethods());
//устанвока папки по умолчанию для хранения статических файлов, таких как JS, CSS
app.use(mount('/static', serve(__dirname + '/../static')));
//объект для хранения шалонов
let template = {
  //главная страница HTML
  main: require(`${appRoot}/route/index/index.marko`)
  /* 	news: require(`${appRoot}/route/news/news.marko`) */
};
//получение GET запроса с главной страницы
router.get('/', async (ctx, next) => {
  //тип данных результата загрузки страницы
  ctx.type = 'html';
  let chkTypeImg = {
    //определение ipad
    isiPad: require('util').inspect(ctx.userAgent.isiPad),
    //опледленеи ipod
    isiPod: require('util').inspect(ctx.userAgent.isiPod),
    //определение iphone
    isiPhone: require('util').inspect(ctx.userAgent.isiPhone),
    //определение Mac
    isMac: require('util').inspect(ctx.userAgent.isMac)
  };
  //тип изобраденияs
  let typeImg = fn.getTypeImg(chkTypeImg);
  //параметр navbar - параметры активного меню
  let navlist;
  await fn.getNavBar().then(res => {
    navlist = res;
  });
  //переменная для хранения 9 случсайных продуктов
  let randomProduct;
  await fn.getRandomProduct().then(res => {
    randomProduct = res;
  });
  let typeDevice = await fn.getTypeDevice(ctx.userAgent);
  //заполнение содеожимого
  ctx.body = template.main.stream({
    //меню навигации
    navlist: navlist,
    //активное меню
    navActive: { parent: 'Кредит', child: 'Кредитные карты' },
    //тип изображения
    typeImg: typeImg,
    //9 случайных продуктов
    randomProduct: randomProduct,
    typeDevice: typeDevice
  });
});

//получение GET запроса с главной страницы
router.get('/news', async (ctx, next) => {
  //тип данных результата загрузки страницы
  ctx.type = 'html';
  //заполнение содеожимого
  //параметр navbar - параметры активного меню
  ctx.body = template.main.stream({ navbar: '/news' });
  //устанвока заголовка HTTP
  ctx.vary('Accept-Encoding');
  //проверка на поддержку сжатия
  if (ctx.acceptsEncodings('gzip')) {
    //уставнока сжатия
    ctx.set('Content-Encoding', 'gzip');
    //сжатие содержимого страницы
    ctx.body = ctx.body.pipe(createGzip());
  }
});

//поулчение всех регионов
router.post('/getRegions', async (ctx, next) => {
  let typeDevice = await fn.getTypeDevice(ctx.userAgent);
  let regions;
  await fn.getRegions().then(res => {
    regions = res;
  });
  ctx.body = { typeDevice: typeDevice, regions: regions };
});

router.post('/getCity/:rid', async (ctx, next) => {
  let arg = ctx.params;
  let city;
  await fn.getCity(arg).then(res => {
    city = res;
  });
  let typeDevice = await fn.getTypeDevice(ctx.userAgent);
  ctx.body = { typeDevice: typeDevice, city: city };
});

router.post('/getAllCity', async (ctx, next) => {
  let list;
  await fn.getAllCity().then(res => {
    list = res;
  });
  ctx.body = { list: list };
});



module.exports = {
  router: router
};

/* router.post('/getRegions', async (ctx, next) => {
  let p1 = ctx.request.body; // your POST params
  let p2 = ctx.params; // URL params, like :id
  ctx.body = 'Завершено';
}); */
