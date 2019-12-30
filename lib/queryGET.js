/**
 * Модуль для робработки GET запросов
 * @member queryDB
 * @module queryDB
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
//модуль для вывода цветного текста в терминале
const clc = require('cli-color');
//модуль с функциями логирования
const logs = require(`${appRoot}/lib/logs`);
//подклчючение модуля для работы с gzip
const { createGzip } = require('zlib');
//модуль для получения данных user-agent
const userAgent = require('koa2-useragent');
//дополнительные функции
const fn = require('./common.js');

//создание маршрутизоватора
var router = new Router();
app.use(userAgent());
//установка роутера для приложения Koa
app.use(router.routes()).use(router.allowedMethods());
//устанвока папки по умолчанию для хранения статических файлов, таких как JS, CSS
app.use(mount('/static', serve(__dirname + '/../static')));
//объект для хранения шалонов
var template = {
	//главная страница HTML
	main: require(`${appRoot}/route/index/index.marko`),
	news: require(`${appRoot}/route/news/news.marko`)
};
//получение GET запроса с главной страницы
router.get('/', async (ctx, next) => {
	//тип данных результата загрузки страницы
	ctx.type = 'html';
	let chkTypeImg = {
		isiPad: require('util').inspect(ctx.userAgent.isiPad),
		isiPod: require('util').inspect(ctx.userAgent.isiPod),
		isiPhone: require('util').inspect(ctx.userAgent.isiPhone),
		isMac: require('util').inspect(ctx.userAgent.isMac)
  };
	//тип изобрадения
	let typeImg = fn.getTypeImg(chkTypeImg);
	//заполнение содеожимого
  //параметр navbar - параметры активного меню
  let navbar;
  await fn.getNavBar().then(res => {
    navbar = res
  })
	ctx.body = template.main.stream({
    nav: navbar,
		active: 0,
		typeImg: typeImg,
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

router.post('/test', async (ctx, next) => {
	let p1 = ctx.request.body; // your POST params
	console.log('TCL: p1', p1);
	let p2 = ctx.params; // URL params, like :id
	console.log('TCL: p2', p2);
	ctx.body = 'Завершено';
});
