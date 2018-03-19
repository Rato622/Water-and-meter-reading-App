var express = require('express');
var router = express.Router();
var mongoose =require('mongoose');
var Elec = require('../models/ElectR.js');

/* GET elec listing. */
router.get('/', function(req, res, next) {

  Elec.find(function(err,elec){
    if(err)
    {
      return next(err);
    }
    res.json(elec);
  })
});

router.put('/:elecM', function(req, res, next) {
    
      var elecM = req.body.elecM;
      //var rangeNum = req.body.rangeNum;
    
      Elec.findOneAndUpdate({elecM:req.params.elecM},{$push:{'electricRead':{readingsE: req.body.readingsE}}},req.body,function(err,elec){
        if(err)
        {
          return next(err);
        }
        res.json(elec);
      })
    });

router.get('/:elecM', function(req, res, next) {

var elecM = req.body.elecM;

  Elec.find({elecM:req.params.elecM},function(err,elec){
    if(err)
    {
      return next(err);
    }
    res.json(elec);
  })
});

router.post('/', function(req, res, next) {

  Elec.create(req.body,function(err,elec){
    if(err)
    {
      return next(err);
    }
    res.json(elec);
  })
});

router.delete('/:elecM', function(req, res, next) {

  var elecM = req.body.elecM;

  Elec.findOneAndRemove({elecM:req.params.elecM},req.body,function(err,elec){
    if(err)
    {
      return next(err);
    }
    res.json(elec);
  })
});

router.delete('/', function(req, res, next) {

  Elec.remove(function(err,elec){
    if(err)
    {
      return next(err);
    }
    res.json(elec);
  })
});

module.exports = router;
