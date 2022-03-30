var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function (req, res, next) {
  var x;
  //var random = Math.random() * (3) + (-1);
  var random = Math.random();
  console.log(req.query.x);
  x = req.query.x;

  // checking if url has params
  if (x == undefined) {
    x = random;
  }


  
  let pow = Math.pow(x,x) 
  let sign =Math.sign(x)
  let tanh = Math.tanh(x)
  let trunc = Math.trunc(x)
  res.render('computation', {
    title: 'Computation',
    values: `applied to ` + x + ` is ` + pow ,
    v1: `applied to ` + x + ` is ` + sign,
    v2: `applied to ` + x + ` is ` + tanh,
    v3: `applied to ` + x + ` is ` + trunc
  });
});

module.exports = router;
