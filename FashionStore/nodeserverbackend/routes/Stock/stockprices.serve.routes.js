const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let StockPrice = require('../../models/StockPrices.model');


router.route('/add').post(function (req,res) {
    let stockPrice = new StockPrice(req.body);
    stockPrice.save()
        .then(sup=>{
            res.status(200).json({'stockPrice':'successful'});
        }).catch(err=>{
        res.status(400).send('fail');
    });
});


// router.route('/getAllStockPrice').get(function (req,res) {
//     StockPrice.find(function (err,supplier) {
//         if(!err){
//             res.json(supplier);
//         }else{
//             res.status(400).send('fail');
//         }
//     });
// });


module.exports = router;

