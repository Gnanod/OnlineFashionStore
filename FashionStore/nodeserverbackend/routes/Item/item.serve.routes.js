const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let Item = require('../../models/item.model');


router.route('/getAllItems').get(function (req,res) {
    Item.find(function (err,item) {
        console.log(err)
        if(!err){
            res.json(item);
        }else{
            res.status(400).send('faild');
        }

    });
});


router.route('/add').post(function (req,res) {

    let item = new Item(req.body);
    item.save()
        .then(item=>{
            res.status(200).json({'item':'success'});
        }).catch(err=>{
        res.status(400).send('faild');
    });
});

module.exports = router;
//
