const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let AdminDetail = require('../../models/AdminAdd.model')


router.route('/add').post(function (req,res) {
    let adminDetail = new AdminDetail(req.body);
    adminDetail.save()
        .then(sup=>{
            res.status(200).json({'AdminDetail':'successful'});
        }).catch(err=>{
        res.status(400).send('fail');
    });
});

router.route('/getAlldetail').get(function (req,res) {
    console.log("getDetails Admin")
    AdminDetail.find().exec().then(item => {
        console.log(item)
        res.status(200).json(item)
    }).catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;

