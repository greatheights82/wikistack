const express = require('express')
const router = express.Router();
const mainPage = require('../views/main')
const { addPage } = require('../views')

router.get('/', async (req, res, next) => {
  // console.log('we hit route 1')
  res.redirect(mainPage);
});

router.post('/', async (req, res, next) => {
  // console.log('we hit route 2')
  res.send('got to POST /wiki/');
});

router.get('/add', (req, res, next) => {
  // console.log('we hit route 3')
  res.send(addPage());
});

module.exports = router
