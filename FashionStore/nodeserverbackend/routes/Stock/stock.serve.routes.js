const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let StockDetails = require('../../models/StockDetails.model');

router.route('/add').post(function (req, res) {

    const stockDetails = req.body;
    stockDetails.map(sd => {
        let stock = {
            supplier: sd.supplier._id,
            itemColorId: bc.itemColorId._id,
            // startDate: ,
            // endDate:
        }
        let stockObj = new StockDetails(stock);
        stockObj.save()
            .then(bc => {
                res.status(200).json({'stockDetails': 'successful'});
            }).catch(err => {
            res.status(400).send('fail');
        });
    })

});



router.get("/getBrandCategoryId/:brand_id/:category_id",function (req,res) {
    const brandId = req.params.brand_id;
    const categoryId = req.params.category_id;
    BrandCategory.findOne({ brandCode: brandId, categoryCode: categoryId },)
        .exec()
        .then(brandCategory =>{
            if( brandCategory ){
                res.status(200).json(brandCategory);
            }else{
                res.status(404).json({"message": "not found"});
            }
        })
        .catch(err=>{
            res.status(500).json(err);
        })
});


module.exports = router;