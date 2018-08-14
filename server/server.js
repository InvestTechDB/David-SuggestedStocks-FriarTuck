const express = require('express');
const bodyParser = require('body-parser');
const faker = require('faker');
const morgan = require('morgan');
const path = require('path');
const db = require('./database/index.js');

const PORT = process.env.PORT || 3001;

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

const app = express();
app.use(allowCrossDomain);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/companies', (req, res) => {
  db.grabAllCompanies((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(JSON.stringify(result));
    }
  });
});

app.get('/companies/:id', (req, res) => {
  db.currentPriceChange(req.params.id, (err) => { // UPDATING
    if (err) {
      console.log(err);
    } else {
      db.connection.query(`SELECT * FROM Company WHERE id = ${req.params.id};`, (err1, result1) => {
        if (err1) {
          console.log(err1);
        } else {
          res.send(JSON.stringify(result1));
        }
      });
    }
  });
});

app.delete(`/companies/:id`, (req, res) => { // delete placeholder

});

app.post(`/companies/`, (req, res) => { // post placeholder

});

app.put(`/companies/:id/`, (req, res) => { // put placeholder

});

function seed() {
  for (let i = 1; i <= 100; i += 1) {
    db.connection.query(`INSERT into Company (name, yesterdayClose, currentPrice, analystRating, genre) VALUES ("${faker.company.companyName()}", "${faker.finance.amount(1.00, 5.00, 2, '$')}", "${faker.finance.amount(1.00, 5.00, 2, '$')}", "${faker.finance.amount(0.00,5.00,2,"%")}", "top100");`);
  }
}

setTimeout(() => seed(), 20000);

app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});
