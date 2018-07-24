const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const faker = require('faker');

const connection = mysql.createConnection(mysqlConfig);

const grabAllCompanies = (callback) => {
    connection.query(`
    SELECT * FROM Company;
    `, (err, res) => {
        if (err) {
        callback(err, null);
        } else {
        callback(null, res);
        }
    });
};

const currentPriceChange = (idx, callback) => {
    connection.query(`UPDATE Company SET currentPrice = '${faker.finance.amount(1.00, 5.00, 2, '$')}' WHERE Id = ${idx};`, (err, res) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, res);
        }
    });
}

module.exports = {
    connection: connection,
    grabAllCompanies: grabAllCompanies,
    currentPriceChange: currentPriceChange
};
