var express = require('express');
var router = express.Router();
const _ =require('lodash')
const url = require('url');

router.get('/getData', function (req, res, next) {

  res.send({status:200,data:req.query});
});

router.post('/addData', function (req, res, next) {
  console.log(req); 
  res.send({status:200,data:1});
});


module.exports = router;