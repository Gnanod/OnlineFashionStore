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

router.route('/getAllusers').get(function (req,res) {
    console.log("getDetails")
    UserDetail.find().exec().then(item => {
        console.log(item)
        res.status(200).json(item)
    }).catch(err => {
            res.status(500).json(err);
        });
 });


module.exports = router;

