const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let UserDetail = require('../../models/User.model')

//
// router.route('/add').post(function (req,res) {
//     let userDetail = new UserDetail(req.body);
//     userDetail.save()
//         .then(sup=>{
//             res.status(200).json({'userDetail':'successful'});
//         }).catch(err=>{
//         res.status(400).send('fail');
//     });
// });


router.route('/add').post(function (req,res) {
    let userDetail = new UserDetail(req.body);
    console.log("------------------------------------");
    console.log(req.body);
    console.log("------------------------------------");
    UserDetail.findOne({ email: req.body.email , password: req.body.password },)
        .exec()
        .then(userValid =>{
            if( userValid ){
                res.status(200).json({'userDetail': "userAvailable"});
            }else{
                userDetail.save()
                    .then(sup=>{
                        res.status(200).json({'userDetail':'successful'});
                    }).catch(err=>{
                    res.status(400).send('fail');
                });
            }
        }).catch(err=>{
        res.status(500).json(err);
    })


});

router.route('/getAllusers').get(function (req,res) {
    console.log("getDetails --- usermanage")
    UserDetail.find().exec().then(item => {
        console.log(item)
        res.status(200).json(item)
    }).catch(err => {
            res.status(500).json(err);
        });
 });


router.route('/getDetailuser/:id').get(function (req,res) {
    console.log("getDetailsof the user----------------------------------------------");
    let id = req.params.id;

    UserDetail.find({ _id : id }).exec().then(item => {
        console.log(item)
        res.status(200).json(item)
    }).catch(err => {
        res.status(500).json(err);
    });
});


router.get("/validateUser/:email/:password",function (req,res) {
    let email = req.params.email;
    let password = req.params.password;
    UserDetail.findOne({ email: email, password: password },)
        .exec()
        .then(userValid =>{
            console.log("User Valid");
            console.log(userValid);
            console.log("User Valid");
            if( userValid ){
                res.status(200).json({"Message": userValid});
            }else{
                res.status(200).json({"Message": "unsuccessful"});
            }
        }).catch(err=>{
            res.status(500).json(err);
        })
});

router.route('/deleteUser/:id').get(function (req, res) {
    let id=req.params.id;
    console.log("Delete Called!");
    UserDetail.deleteOne({_id:id}).then(sup=>{
         console.log("successful");
        res.status(200).json({'userDelete':'successful'});
    }).catch(err=>{
        console.log("fail");
        res.status(400).send('fail');
    });
});


router.route('/seachUser/:cust_name').get(function (req,res) {
    console.log("search entered");
    let name = req.params.cust_name;
    UserDetail.find({firstName : name}).exec().then(item => {
        if( item ){
            res.status(200).json(item);
        }else{
            res.status(404).json({"message": "not found"});
        }
    })
        .catch(err=>{
            res.status(500).json(err);
        })
});

module.exports = router;

