const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let BrandCategory = require('../../models/BrandCategory.model');

router.route('/add').post(function (req, res) {

    const brandCategory = req.body;
    brandCategory.map(bc => {
        let brandc = {
            brandCode: bc.brandCode,
            categoryCode: bc.categoryCode
        }
        let brandCategoryObj = new BrandCategory(brandc);
        brandCategoryObj.save()
            .then(bc => {
                res.status(200).json({'brandCategory': 'success'});
            }).catch(err => {
            res.status(400).send('faild');
        });
    })

});

module.exports = router;
