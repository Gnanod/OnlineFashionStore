const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let Cart = require('../../models/Cart.model');



router.route('/add').post(function (req,res) {
    let cart = new Cart  (req.body);
    console.log("hi");
    console.log(cart);
    cart.save()
        .then(sup=>{
            console.log("successful");
            res.status(200).json({'cart':'successful'});
        }).catch(err=>{
        console.log("fail");
        res.status(400).send('fail');
    });
});

router.route('/getDetails/:id').get(function (req, res) {
    console.log("Cart called!")
    let id = req.params.id;

    Cart.findOne({ userId: id }).populate("itemCode").exec().then(item => {
        console.log("Succesfull!")
        res.status(200).json(item)
    })
        .catch(err => {
            console.log("Fail")
            res.status(500).json(err);
        });
});

module.exports = router;