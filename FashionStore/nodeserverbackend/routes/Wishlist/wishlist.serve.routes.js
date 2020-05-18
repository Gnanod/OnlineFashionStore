const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let Wishlist = require('../../models/Wishlist.model');
let itemcolor = require('../../models/ItemColor.model');

router.route('/add').post(function (req,res) {
    let wishlist = new Wishlist  (req.body);
    wishlist.save()
        .then(sup=>{
            console.log("successful");
            itemcolor.findOne({_id:wishlist.itemId}).then(item => {

                Wishlist.updateMany({itemId:wishlist.itemId},{$set: {image:item.image}}).then(sup=>{
                    res.status(200).json({'itemColor':'successful'});
                }).catch(err=>{
                    res.status(400).send('fail');
                });
            });
        }).catch(err=>{
        res.status(400).send('fail');
    });
});
router.route('/getDetails/:id').get(function (req, res) {
 let id=req.params.id;

    Wishlist.find({ userId: id }).exec().then(item => {
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
        res.status(200).json({'wishlist':'successful'});
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
router.route('/addPhoto/:id').get(function (req, res) {

    let id = req.params.id;

    console.log(id)
    itemcolor.findOne({_id:id}).then(item => {

        console.log(item.image)
        Wishlist.update({itemId:id},{$set: {image:item.image}}).then(sup=>{
            console.log("image successful");
            res.status(200).json({'itemColor':'successful'});
        }).catch(err=>{
            console.log("itemColor fail");
            res.status(400).send('fail');
        });
    });

});
module.exports = router;
