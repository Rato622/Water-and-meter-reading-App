var express = require('express');
var router = express.Router();
var mongoose =require('mongoose');
var Water = require('../models/WaterR.js');

/* GET water listing. */
router.get('/', function(req, res, next) {

  Water.find(function(err,water){
    if(err)
    {
      return next(err);
    }
    res.json(water);
  })
});

router.get('/:waterM', function(req, res, next) {

var waterM = req.body.waterM;

  Water.find({waterM:req.params.waterM},function(err,water){
    if(err)
    {
      return next(err);
    }
    res.json(water);
  })
});

router.post('/', function(req, res, next) {

  Water.create(req.body,function(err,water){
    if(err)
    {
      return next(err);
    }
    res.json(water);
  })
});

router.delete('/:waterM', function(req, res, next) {

  var waterM = req.body.waterM;

  Water.findOneAndRemove({waterM:req.params.waterM},req.body,function(err,water){
    if(err)
    {
      return next(err);
    }
    res.json(water);
  })
});

router.delete('/', function(req, res, next) {

  Water.remove(function(err,water){
    if(err)
    {
      return next(err);
    }
    res.json(water);
  })
});

router.put('/:waterM', function(req, res, next) {

  var waterM = req.body.waterM;
  //var rangeNum = req.body.rangeNum;

  Water.findOneAndUpdate({waterM:req.params.waterM},{$push:{'waterRead':{readingsW: req.body.readingsW}}},req.body,function(err,water){
    if(err)
    {
      return next(err);
    }
    res.json(water);
  })
});


module.exports = router;
