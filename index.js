/**
 * Входной модуль приложения
 * @member index
 * @module index
 */

//подулючение модуля для рабоы с MarcoJS
require('marko/express');
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
		console.log('TCL: err', err);
		if (err) {
			throw err;
		}
		console.log(clc.green(`Сервер запущен на порту ${config.port}`));
		let log = {
			action: 'app.listen',
			status: 'success',
			file: 'index.js',
			type: 'server',
			msg: `Сервер запущен успешно на порту ${config.port}`
		};
		logs(log);
		//отправка события для активации автообновления
		if (process.send) {
			process.send('online');
		}
	});
} catch (err) {
	let log = { action: 'app.listen', status: 'error', file: 'index.js', type: 'server', msg: err };
	logs(log);
	console.log('TCL: err', err);
}
