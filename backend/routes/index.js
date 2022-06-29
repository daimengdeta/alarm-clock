var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', (req, res) => {
  res.send({ data: '132321321312', name: 1231 });
  res.end();
});

router.post('/postTest', (req, res) => {
  res.send({ data: 'postTest', name: 1231 });
  res.end();
});

router.get('/xlz', (req, res) => {
  console.log(req.query);
  res.send(req.query);
  res.end();
});

module.exports = router;
