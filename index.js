/**
 * Входной модуль приложения
 * @member index
 * @module index
 */

'use strict';

//модуль для работы node js с MarcoJS
require('marko/node-require');

//модуль для работы с сервером
const app = require('./lib/server');
//получение корнеовго каталога
const appRoot = require('app-root-path');
//модуль для логирования действий
const logs = require(`${appRoot}/lib/logs.js`);
//модуль для вывода цветного текста в терминале
const clc = require('cli-color');
//конфигурация HTTP сервера
const fs = require('fs');
//получение параметров сервера HTTP
const config = JSON.parse(fs.readFileSync(`${appRoot}/config/server.json`).toString());

//запуск сервера
try {
	app.listen(config.port, err => {
		if (err) {
			throw err;
		}
		//вывод сообщения о запуске сервера
		console.log(clc.green(`Сервер запущен на порту ${config.port}`));
		//параметры логирования
		let log = {
			action: 'app.listen',
			status: 'success',
			file: 'index.js',
			type: 'server',
			msg: `Сервер запущен успешно на порту ${config.port}`
		};
		logs(log);
	});
} catch (err) {
	//параметры логирования
	let log = { action: 'app.listen', status: 'error', file: 'index.js', type: 'server', msg: err };
	logs(log);
}
