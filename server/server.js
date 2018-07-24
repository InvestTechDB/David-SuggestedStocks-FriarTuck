var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 3000;
var faker = require('faker');
const db = require('./database/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('../client/dist'));

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


app.listen(port, () => {
  console.log('listening on the port man!');
});
