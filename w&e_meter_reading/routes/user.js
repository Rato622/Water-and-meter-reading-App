var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/Person.js');
var Login = require('../models/Login.js');

router.get('/',function(req,res,next){
    var name = req.body.name;
    console.log(name);

    User.find(function(err,user){
        if(err)
        {
            return next(err);
        }
        res.json(user);

    })

})
router.get('/userinfo/:profileNum',function(req,res,next){

    var profileNum = req.body.profileNum;

    User.aggregate([
        {
            $match : {
                profileNum:req.params.profileNum
            }
        },
        {
            $lookup:{
                from : "logins",
                localField:"profileNum",
                foreignField:"profNumber",
                as:"loginDetails"
            }
        },
        {
            $lookup:{
                from : "waters",
                localField:"waterM",
                foreignField:"waterM",
                as:"waterReadings"
            }
        },
        {
            $lookup:{
                from : "elecs",
                localField:"elecM",
                foreignField:"elecM",
                as:"electricityReadings"
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
router.get('/allusers',function(req,res,next){
    
        User.aggregate([
            
            {
                $lookup:{
                    from : "logins",
                    localField:"profileNum",
                    foreignField:"profNumber",
                    as:"loginDetails"
                }
            },
            {
                $lookup:{
                    from : "waters",
                    localField:"waterM",
                    foreignField:"waterM",
                    as:"waterReadings"
                }
            },
            {
                $lookup:{
                    from : "elecs",
                    localField:"elecM",
                    foreignField:"elecM",
                    as:"electricityReadings"
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
router.get('/wreadings/:waterM',function(req,res,next){

    var waterM = req.body.waterM;
    
        User.aggregate([
            {
                    $match : {
                        waterM:req.params.waterM
                    }
            },
            {
                
                $lookup:{
                    from : "waters",
                    localField:"waterM",
                    foreignField:"waterM",
                    as:"waterReadings"
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
router.get('/:profileNum/:password',function(req,res,next){
    var profileNum = req.body.profileNum;
    var password = req.body.password;

    //res.send(emailAddress + ' ' + password);

    User.find({profileNum:req.params.profileNum,password:req.params.password}, function(err,user){
        if(err)
        {
            return next(err);
        }
        
        res.json(user);
        
    })

})
router.get('/:profileNum',function(req,res,next){

    var profileNum = req.body.profileNum;

    User.findOne({profileNum:req.params.profileNum}, function(err,user){
        if(err)
        {
            return next(err);
        }
        res.json(user);

    })

})

router.post('/',function(req,res,next){

       User.create(req.body,function(err,user){
        if(err)
        {
            return next(err);
        }
        res.send("Successfully registered!!!");
    })

})
router.delete('/',function(req,res,next){

       User.remove(function(err,user){
        if(err)
        {
            return next(err);
        }
        res.json(user);
    })

})
router.delete('/:profileNum',function(req,res,next){

        var profileNum = req.body.profileNum;

       User.findOneAndRemove({profileNum:req.params.profileNum},req.body,function(err,user){
        if(err)
        {
            return next(err);
        }
        res.send("Successfully deleted!!!");
    })

})
router.put('/:profileNum',function(req,res,next){

         var profileNum = req.body.profileNum;

       User.findOneAndUpdate({profileNum:req.params.profileNum},req.body,function(err,user){
        if(err)
        {
            return next(err);
        }
        res.send("Successfully updated");
    })

})


module.exports = router;