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

router.route('/deleteAdmin/:id').get(function (req, res) {
    let id=req.params.id;
    console.log("Delete Admin Called!");
    AdminDetail.deleteOne({_id:id}).then(sup=>{
        console.log("successful");
        res.status(200).json({'adminDelete':'successful'});
    }).catch(err=>{
        console.log("fail");
        res.status(400).send('fail');
    });
});

module.exports = router;
