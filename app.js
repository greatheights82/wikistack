const morgan = require('morgan');
const express = require('express');
const { db } = require('./models');
const models = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use('/wiki', wikiRouter);
app.use('/user', userRouter);

// console.log({ db });

db.authenticate().then(() => {
  console.log('connected to the database');
});

const PORT = 3000;

const init = async () => {
  await models.db.sync(); // {force: true}

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

init();
