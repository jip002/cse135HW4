const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const { User } = require('../models/user');

router.use(express.json());
router.use(bodyParser.json());

router.get('/info', async(req, res)=>{
    console.log("works");
    try {
        const users = await User.find({});
        res.status(200).json(users);
    }
    catch (error){
        res.status(500).json({message: error.message}); 
    }
})
router.post('/info', async(req, res)=>{
    console.log('--POST 200 ---');
    const user = new User({
        email: req.body.email,
        password: req.body.password, //hash the password. 
        admin: false
    }) 
    //type email and pw is enough; no nee to fill admin and id. 
    const resultUser = await user.save();
    console.log(resultUser);
    res.status(200).send(await User.find());
})
router.delete('/info', async(req, res)=>{
    console.log('here');
    try {
        
        const removed = await User.findByIdAndRemove(req.params.id);
        res.status(200).json(removed);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})
router.put('/info', async(req, res)=>{
    console.log('put');
    try {
        const updated = await User.findByIdAndUpdate(req.params.id,req.body, { new: true });
        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})
router.patch('/info', async(req, res)=>{
    console.log('patch');
    try {
        const updated = await User.findByIdAndUpdate(req.params.id,{$set: req.body}, { new: true });
        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})
module.exports = router;