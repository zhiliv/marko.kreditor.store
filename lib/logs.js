/**
 * модуль с функиями для лоигрования действий
 * @member logs
 * @module logs
 */
'use strict';

//модуль для выполнения sql запросов
const query = require('./queryDB');

/**
 * Логирование всех действий
 * @async
 * @param {Object} arg Параметры логирования
 * @param {String} arg.action Выполяемое действие
 * @param {String} arg.status статус выполнения, true - успех, false - с ошибкой
 * @param {Object} arg.err Список ошибок
 * @function
 * @memberof logs
 */
module.exports = arg => {
	let sql = `INSERT INTO logs (action, status, file, type, msg) 
              VALUES ('${arg.action}', '${arg.status}', '${arg.file}', '${arg.type}', '${arg.msg}')`;
	query.exec(sql);
};
