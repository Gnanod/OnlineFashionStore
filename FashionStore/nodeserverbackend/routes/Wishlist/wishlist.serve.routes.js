const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let Wishlist = require('../../models/Wishlist.model');

router.route('/add').post(function (req,res) {
    let wishlist = new Wishlist  (req.body);
    console.log("wishlist here");
    console.log(wishlist);

    wishlist.save()
        .then(sup=>{
            console.log("successful");
            res.status(200).json({'cart':'successful'});
        }).catch(err=>{
        console.log("wishlist fail");
        res.status(400).send('fail');
    });
});
router.route('/getDetails/:id').get(function (req, res) {
    console.log("Wishlist called!")
 let id=req.params.id;

    Wishlist.find({ userId: id }).exec().then(item => {
        console.log(item)
        console.log("inside get")
        res.status(200).json(item)
    })
        .catch(err => {
            console.log("Fail")
            res.status(500).json(err);
        });
});
router.route('/deleteItem/:id').get(function (req, res) {
    let id=req.params.id;
    console.log("Delete Called!");
    Wishlist.deleteOne({_id:id}).then(sup=>{
        console.log("successful");
        res.status(200).json({'cart':'successful'});
    }).catch(err=>{
        console.log("fail");
        res.status(400).send('fail');
    });
});
router.route('/clearWishlist/:id').get(function (req, res) {
    let id=req.params.id;
    Wishlist.deleteMany({userId:id}).then(sup=>{
        console.log("Clear Cart successful");
        //res.status(200).json({'cart':'successful'});
    }).catch(err=>{
        console.log("Clear Cart fail");
        //res.status(400).send('fail');
    });
});
module.exports = router;