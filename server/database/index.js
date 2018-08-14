// const mysql = require('mysql');
// const mysqlConfig = require('./config.js');
const faker = require('faker');

// const connection = mysql.createConnection(mysqlConfig);

var pgp = require('pg-promise')(/*options*/)
var db = pgp('postgres://Janet:@localhost:5432/recommended_stocks')

const grabAllCompanies = (callback) => {
    db.many(`SELECT * FROM company where id=$1 or id=$2 or id=$3 or id=$4 or id=$5 or id=$6 or id=$7 or id=$8 or id=$9 or id=$10 or id=$11 or id=$12`, [Math.floor(Math.random() * 10000000 +1),Math.floor(Math.random() * 10000000 +1),Math.floor(Math.random() * 10000000 +1),Math.floor(Math.random() * 10000000 +1),Math.floor(Math.random() * 10000000 +1),Math.floor(Math.random() * 10000000 +1),Math.floor(Math.random() * 10000000 +1),Math.floor(Math.random() * 10000000 +1),Math.floor(Math.random() * 10000000 +1),Math.floor(Math.random() * 10000000 +1),Math.floor(Math.random() * 10000000 +1),Math.floor(Math.random() * 10000000 +1)])
    .then(function (data) {
    callback(null, data)
    })
    .catch(function (error) {
    console.log('ERROR:', error)
    })
};

module.exports = {
    grabAllCompanies: grabAllCompanies
};