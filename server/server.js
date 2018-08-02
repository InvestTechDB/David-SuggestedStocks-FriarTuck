var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3001;
var faker = require('faker');
const morgan = require('morgan');
const db = require('./database/index.js');
var path = require('path');

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

app.use(allowCrossDomain);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// use ':/companies'

app.use( express.static(path.join(__dirname, '../client/dist')));

app.get(`/companies`, (req, res) => {
  db.grabAllCompanies((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(JSON.stringify(result));
    }
  });
});

app.get(`/companies/:id`, (req, res) => {
  db.currentPriceChange(req.params.id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      db.connection.query(`SELECT * FROM Company WHERE id = ${req.params.id};`, (err1, result1) => {
        if (err1) {
          console.log(err1);
        } else {
          res.send(JSON.stringify(result1))
        }
      })
    }
  })

})


app.listen(PORT, () => {
  'listening on port ' + PORT;
});
