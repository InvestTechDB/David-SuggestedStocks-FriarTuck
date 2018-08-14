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

app.delete(`/companies/:id`, (req, res) => { // delete placeholder

});

app.post(`/companies`, (req, res) => { // post placeholder

});

app.put(`/companies/:id`, (req, res) => { // put placeholder

});


app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});
