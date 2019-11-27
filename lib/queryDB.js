/**
 * Модуль для выполнения запросов SQL
 * @member queryDB
 * @module queryDB
 */
'use strict';

//модуль для подключения БД
const db = require('./mysql');
//модуль для работы с промис
const q = require('q');
//модуль для логирования
const logs = require('./logs');
//модуль для вывода цветного текста в терминале
const clc = require('cli-color');

/**
 * Запрос на выборку
 * @async
 * @function select
 * @param {String} sql Текст запроса
 * @return {Object} data - результат выборки; err - ошибка;
 * @memberof queryDB
 */
module.exports.select = async sql => {
	//создание ожидания
	let defer = q.defer();
	//результат
	let resp = { err: null, data: null };
	//выполнение запроса
	db.query(sql, (err, rows) => {
		//добавление днных выполения в главный результат
		if (err) {
			resp.err = err.sqlMessage;
		} else {
			resp.data = rows;
		}
		if (process.argv[2]) {
			console.log('success', clc.green(resp.data));
			console.log('error', clc.green(resp.err));
		}
		//добалвение результата в Promise
		defer.resolve(resp);
	});
	//возврат результата
	return defer.promise;
};

/**
 * Запрос на выборку
 * @async
 * @function exec
 * @param {String} sql Текст запроса
 * @return {Object} data - количество затронутых строк; err - ошибка;
 * @memberof queryDB
 */
module.exports.exec = async sql => {
	//создание ожидания
	let defer = q.defer();
	//результат
	let resp = { err: null, data: null };
	//выполнение запроса
	db.query(sql, (err, rows) => {
		//добавление днных выполения в главный результат
		if (err) {
			resp.err = err;
		} else {
			resp.data = rows.affectedRows;
		}
		if (process.argv[2]) {
			console.log('success', clc.green(resp.data));
			console.log('error', clc.green(resp.err));
		}
		//добалвение результата в Promise
		defer.resolve(resp);
	});
	//возврат результата
	return defer.promise;
};
