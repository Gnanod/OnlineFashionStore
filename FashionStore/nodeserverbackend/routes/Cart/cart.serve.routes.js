const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let Cart = require('../../models/Cart.model');
let itemcolor = require('../../models/ItemColor.model');
let Order = require('../../models/Order.model');


router.route('/add').post(function (req,res) {
    let cart = new Cart  (req.body);

    console.log("hi");
    console.log(cart.itemId);
    cart.save()
        .then(sup=>{
            // console.log("successful");
            //res.status(200).json({'cart':'successful'});
            itemcolor.findOne({_id:cart.itemId}).then(item => {

               // console.log(item.image)
                Cart.updateMany({itemId:cart.itemId},{$set: {image:item.image}}).then(sup=>{
                    console.log("image successful");
                    res.status(200).json({'cart':'successful'});
                }).catch(err=>{
                    console.log("itemColor fail");
                    res.status(400).send('fail');
                });
            });
        }).catch(err=>{
        //console.log("fail");
        res.status(400).send('fail');
    });
 Cart.findOne({itemId:'5ebd97d161523312a6c2d3c1'}).then(item1 =>{
     console.log("After Image")
     console.log(item1.image)
 })

});

router.route('/getDetails/:id').get(function (req, res) {
    console.log("Cart called!")
    let id = req.params.id;

    Cart.find({ userId: id }).exec().then(item => {
        console.log(item)
        res.status(200).json(item)
    })
        .catch(err => {
            console.log("Fail")
            res.status(500).json(err);
        });
});

router.route('/decQuantity/:id/:quantity').get(function (req, res) {
    console.log("decrement Called!");
    let id = req.params.id;
    console.log(id );
    let quantity = req.params.quantity;
    console.log(quantity);
    Cart.updateOne({_id:id},{$set: {quantity:quantity}}).then(sup=>{
        console.log("successful");
        //res.status(200).json({'cart':'successful'});
    }).catch(err=>{
        console.log("fail");
        //res.status(400).send('fail');
    });
});

router.route('/incQuantity/:id/:quantity').get(function (req, res) {
    let id = req.params.id;
    let quantity=req.params.quantity;
    Cart.updateOne({_id:id},{$set: {quantity:quantity}}).then(sup=>{
        console.log("successful");
    }).catch(err=>{
        console.log("fail");

    });
});

router.route('/deleteItem/:id').get(function (req, res) {
    let id=req.params.id;
    console.log("Delete Called!");
    Cart.deleteOne({_id:id}).then(sup=>{
        console.log("successful");
        res.status(200).json({'cart':'successful'});
    }).catch(err=>{
        console.log("fail");
        res.status(400).send('fail');
    });
});
router.route('/clearCart/:id').get(function (req, res) {
    let id=req.params.id;
    Cart.deleteMany({userId:id}).then(sup=>{
        console.log("Clear Cart successful");
        //res.status(200).json({'cart':'successful'});
    }).catch(err=>{
        console.log("Clear Cart fail");
        //res.status(400).send('fail');
    });
});
router.route('/getSub/:id').get(function (req, res) {
    let id =req.params.id;
    let fullSum=0;
    Cart.find({ userId: id }).exec().then(item => {
        item.forEach(function(items, index, arr) {
            let itemSum=items.cartPrice*items.quantity;
            fullSum=fullSum+itemSum;
        })
        res.json(fullSum);
    })
        .catch(err => {
            console.log("fail")
        });
});
router.route('/addOrder').post(function (req,res) {

    let order=new Order  (req.body);

    order.save().then(sup=>{
        console.log("image successful");
        res.status(200).json({'itemColor':'successful'});
    }).catch(err=>{
        console.log("itemColor fail");
        res.status(400).send('fail');
    });
});
router.route('/updateQuantity/:id/:quantity').get(function (req, res) {
    console.log("In the dec")
    let id = req.params.id;
    let quantity=req.params.quantity;
    itemcolor.updateOne({_id:id},{$set: {quantity:quantity}}).then(sup=>{
        console.log("itemColor successful");
        res.status(200).json({'itemColor':'successful'});
    }).catch(err=>{
        console.log("itemColor fail");
        res.status(400).send('fail');
    });
});
router.route('/addPhoto/:id').get(function (req, res) {

    let id = req.params.id;


    itemcolor.findOne({_id:id}).then(item => {

        console.log(item.image)
        Cart.update({itemId:id},{$set: {image:item.image}}).then(sup=>{
            console.log("image successful");
            res.status(200).json({'itemColor':'successful'});
        }).catch(err=>{
            console.log("itemColor fail");
            res.status(400).send('fail');
        });
    });

});
router.route('/getOrders').get(function (req, res) {

    //Order.find( ).exec().then(item => {
    //Order.aggregate({ $group: { id: '$orderId', name: { $max: '$n' } } })
        //console.log(item)
      //  res.status(200).json(item)
    //})
       // .catch(err => {
           // console.log("Fail")
          //  res.status(500).json(err);
        //});




});

module.exports = router;