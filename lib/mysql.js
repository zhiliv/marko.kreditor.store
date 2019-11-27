/**
 * Модуль подключения к БД
 * @member mysqlConnector
 * @module mysqlConnector
 */

'use strict';

//модуль для работы с базой данных
const mysql = require('mysql2');
//получение корнеовго каталога
const appRoot = require('app-root-path');
//подклчюение моделя для работы с файловой системой
const fs = require('fs');
//подключение MySQL сервера
const config = JSON.parse(fs.readFileSync(`${appRoot}/config/mysql.json`).toString());
//экспорт подключения к базе данных
module.exports = mysql.createPool(config);
