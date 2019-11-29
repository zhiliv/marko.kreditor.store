/**
 * Модуль для работы с запросами сервера
 * @member server
 * @module server
 */

'use strict';

//подключение фреймворка koa
const Koa = require('koa');

//Настроить лассо, чтобы контролировать, как JS / CSS / и т. Д. доставляется в браузер
require('lasso').configure({
	plugins: [
		'lasso-marko' //Разрешить компиляцию и перенос шаблонов Marko в браузер
	],
	outputDir: __dirname + './../static', //Поместите все сгенерированные JS / CSS / и т.д. файлы в "статический" каталог
	bundlingEnabled: true, //Включить только комплектацию в производстве
	minify: true, //Только минимизируйте JS и CSS код в производстве
	fingerprintsEnabled: true // Добавляйте только отпечатки пальцев к URL в производстве
});

//создание приложения Koa
const app = new Koa();

//экспортирование приложения
module.exports = app;

//подключение модуля для работы с GET запросами
require('./queryGET');
