var db = require('./index.js').connection;
var faker = require('faker');

///_COMPANY
for (var i = 1; i <= 100; i++) {
    db.query(`INSERT into Company (name, yesterdayClose, currentPrice, analystRating, genre) VALUES ("${faker.company.companyName()}", "${faker.finance.amount(1.00, 5.00, 2, '$')}", "${faker.finance.amount(1.00, 5.00, 2, '$')}", "${faker.finance.amount(0.00,5.00,2,"%")}", "top100");`);
}
