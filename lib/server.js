/**
 * Модуль для работы с запросами сервера
 * @member server
 * @module server
 */

'use strict';

//получение корнеовго каталога
const appRoot = require('app-root-path');
//модуль для работы с сервером Express
const express = require('express');
//модуль для включения компрессии сайта(gzip)
const compression = require('compression');
//модуль для работы Express с MarcoJs
const markoExpress = require('marko/express');
//модуль для вывода цветного текста в терминале
const clc = require('cli-color');
const logs = require(`${appRoot}/lib/logs`);

//создание и настройка сборщика
require('lasso').configure({
	plugins: [
		'lasso-marko' //используемый плагин для работы сборщика
	],
	outputDir: __dirname + '/static', //ссылка на открытые файлы, где лежат css, js
	bundlingEnabled: true, //указание параметра сборки для проекта
	minify: true, //минификация файлов
	fingerprintsEnabled: true
});

//создание приложения Express
var app = express();
//включение Marco
app.use(markoExpress());
//включение компрессии на сайте
app.use(compression());
//разщрешенеи модуля Express для работы с папокой 'static'
app.use(require('lasso/middleware').serveStatic());

//объект для хранения шалонов
var template = {
	main: require(`${appRoot}/route/main/main.marko`)
};

app.get('/', async (req, res) => {
	await res.marko(template.main, {});
});

module.exports = app;
