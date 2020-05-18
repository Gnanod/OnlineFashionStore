const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let Feedback = require('../../models/Feedback.model');


router.route('/add').post(function (req,res) {
    let feedback = new Feedback(req.body);

    console.log(feedback)
    feedback.save()
        .then(sup=>{
            res.status(200).json({'feedback':'successful'});
        }).catch(err=>{
        res.status(400).send('fail');
    });
});

router.route('/getAlldetail').get(function (req,res) {

    Feedback.find().exec().then(item => {

        res.status(200).json(item)
    }).catch(err => {
        res.status(500).json(err);
    });
});
module.exports = router;

