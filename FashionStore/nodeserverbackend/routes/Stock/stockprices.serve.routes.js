const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let StockPrice = require('../../models/StockPrices.model');

//
// router.route('/add').post(function (req,res) {
//     let stockPrice = new StockPrice(req.body);
//     console.log("ddd"+ stockPrice);
//     stockPrice.save()
//         .then(sup=>{
//             res.status(200).json({'stockPrice':'successful'});
//         }).catch(err=>{
//         res.status(400).send('fail');
//     });
// });

router.route('/add').post(function (req,res) {
    const stockPrice = req.body;
    console.log('LLLLLLLLLLLL')
    console.log(stockPrice)
    console.log('LLLLLLLLLLLL')
        let stockPriceObj = new StockPrice(stockPrice);
        // console.log("StockObject:"+stockPriceObj);
        stockPriceObj.save()
            .then(sup => {
                res.status(200).json({'stockPrice': 'successful'});
            }).catch(err => {
            res.status(400).send('fail');
        });
    // })

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

router.route('/updateQuantityPrice/:id/:quantity/:price').get(function (req, res) {
    let id = req.params.id;
    let quantity = req.params.quantity;
    let price = req.params.price;
    itemcolor.updateMany({_id:id},{$set: {quantity:quantity,price:price}}).then(sup=>{
        res.status(200).json({'itemColor':'successful'});
    }).catch(err=>{
        res.status(400).send('fail');
    });
});



module.exports = router;

