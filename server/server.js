var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3001;
var faker = require('faker');
var morgan = require('morgan');
var db = require('./database/index.js');
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


app.use(express.static(path.join(__dirname, '../client/dist')));

app.get(`/companies`, (req, res) => { // get
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
  'listening on port ' + PORT;
});
