const mysql = require('mysql');
const mysqlConfig = require('./config.js');

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
    })
}

module.exports = {
    connection: connection,
    grabAllCompanies: grabAllCompanies
};
