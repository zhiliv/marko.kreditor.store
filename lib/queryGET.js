/**
 * Модуль для робработки GET запросов
 * @member queryDB
 * @module queryDB
 */

 'use strict'

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

//создание маршрутизоватора
var router = new Router();
//установка роутера для приложения Koa
app.use(router.routes()).use(router.allowedMethods());
//устанвока папки по умолчанию для хранения статических файлов, таких как JS, CSS
app.use(mount('/static', serve(__dirname + '/../static')));
//объект для хранения шалонов
var template = {
  //главная страница HTML
	main: require(`${appRoot}/route/main/main.marko`)
};


//получение GET запроса с главной страницы
router.get('/', async (ctx, next) => {
  //тип данных результата загрузки страницы
  ctx.type = 'html';
  //заполнение содеожимого
	ctx.body = template.main.stream({});
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


