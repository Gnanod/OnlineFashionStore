const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let Item = require('../../models/item.model');
let NewArraivalItem = require('../../models/NewArrivalItem.model');



router.route('/getAllItems').get(function (req, res) {


    Item.find(function (err, item) {

        if (!err) {
            res.json(item);
        } else {
            res.status(400).send('faild');
        }

    });
});


router.route('/add').post(function (req, res) {

    const newItemObj = {
        itemCode: req.body.itemCode,
        itemName: req.body.itemName,
        brandCategory : req.body.brandCategoryId._id,
        description : req.body.description
    }

    let item = new Item(newItemObj);
    item.save()
        .then(item => {
            res.status(200).json({'item': 'success'});
        }).catch(err => {
        res.status(400).send('faild');
    });
});

router.route('/itemCategory/:id').get(function (req, res) {
        const id = req.params.id;

        Item .find().populate('brandCategory')
            .then(item => {
            }).catch(err => {
            res.status(400).send('faild');
        });

});

router.route('/addNewArraivalItems').post(function (req, res) {
    let newArrivalItem = req.body;
    newArrivalItem.map(bc => {
        const newItemObj = {
            itemCode: bc.itemCode._id
        }
        let newitem = new NewArraivalItem(newItemObj);
        newitem.save()
            .then(item => {
                res.status(200).json({'newArrival': 'success'});
            }).catch(err => {
            res.status(400).send('faild');
        });
    })
});


// outer.route('/getAllNewArrivals').get(function (req, res) {
//     NewArraivalItem.find(function (err, item) {
//         if (!err) {
//             res.json(item);
//         } else {
//             res.status(400).send('faild');
//         }
//     });
// });



module.exports = router;
//





