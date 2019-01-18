const morgan = require('morgan');
const express = require('express');
const app = express();
const { db } = require('./models');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

console.log({ db });

db.authenticate().then(() => {
  console.log('connected to the database');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
