const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let Feedback = require('../../models/Feedback.model');


router.route('/add').post(function (req,res) {
    let feedback = new Feedback(req.body);
    feedback.save()
        .then(sup=>{
            res.status(200).json({'feedback':'successful'});
        }).catch(err=>{
        res.status(400).send('fail');
    });
});


module.exports = router;
