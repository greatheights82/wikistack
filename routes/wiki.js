const express = require('express');
const router = express.Router();
const { main } = require('../views');
const { addPage } = require('../views');

// router.get('../', mainPage);

router.get('/', (req, res, next) => {
  res.send(main());
});

router.post('/', async (req, res, next) => {
  // console.log('we hit route 2')
  console.log(res.json(req.body))
  // res.send('got to POST /wiki/');
});

router.get('/add', (req, res, next) => {
  // console.log('we hit route 3')
  res.send(addPage());
});

module.exports = router;
