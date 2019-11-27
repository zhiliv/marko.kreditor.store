//получение корнеовго каталога
const appRoot = require('app-root-path');
const query = require(`${appRoot}/lib/queryDB.js`);
const q = require('q')

exports.getData = async () => {
  let defer = q.defer()
 let sql = 'SELECT * FROM regions'
 query.select(sql).then(res => {
  defer.resolve(res.data)
 })
 return defer.promise;
}