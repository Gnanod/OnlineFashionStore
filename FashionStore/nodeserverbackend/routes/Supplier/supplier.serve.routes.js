const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let Supplier = require('../../models/Supplier.model');


router.route('/add').post(function (req,res) {
    let supplier = new Supplier(req.body);
    supplier.save()
        .then(sup=>{
            res.status(200).json({'supplier':'success'});
        }).catch(err=>{
        res.status(400).send('faild');
    });
});

// router.route('/getAllSuppliers').get(function (req,res) {
//     Supplier.find(function (err,supplier) {
//         if(!err){
//             res.json(supplier);
//         }else{
//             res.status(400).send('fail');
//         }
//     });
// });


module.exports = router;

