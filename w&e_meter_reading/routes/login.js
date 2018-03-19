var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Login = require('../models/Login.js');
var User = require('../models/Person.js');

router.get('/',function(req,res,next){

    Login.find(function(err,person){
        if(err)
        {
            return next(err);
        }
        res.json(person);

    })

})
router.delete('/', function(req, res, next) {
    
      Login.remove(function(err,person){
        if(err)
        {
          return next(err);
        }
        res.json(person);
      })
    })
router.post('/',function(req,res,next){

       Login.create(req.body,function(err,person){
        if(err)
        {
            return next(err);
        }
        res.json(person);
    })

})
router.get('/all',function(req,res,next){
    
    Login.aggregate([
            {
                $lookup:{
                    from : "users",
                    localField:"profNumber",
                    foreignField:"profileNum",
                    as:"newField"
                }
            }
            
        ], function(err, user){
            if(err)
            {
                return next(err);
            }
            res.json(user);
        })
    
    
    
    })

module.exports = router;