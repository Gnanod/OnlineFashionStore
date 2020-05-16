const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let UserDetail = require('../../models/User.model')


router.route('/add').post(function (req,res) {
    let userDetail = new UserDetail(req.body);
    userDetail.save()
        .then(sup=>{
            res.status(200).json({'userDetail':'successful'});
        }).catch(err=>{
        res.status(400).send('fail');
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

