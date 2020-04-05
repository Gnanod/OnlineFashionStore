const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let Brand = require('../models/Brand.model');

router.route('/add').post(function (req,res) {

    let brand = new Brand(req.body);
    brand.save()
        .then(brand=>{
            res.status(200).json({'brand':'success'});
        }).catch(err=>{
        res.status(400).send('faild');
    });
})

module.exports = router;
//
