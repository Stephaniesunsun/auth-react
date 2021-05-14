var express = require('express');
var router = express.Router();
const {verifyJWT}=require('../middleware/verify');

router.get('/',verifyJWT,(req,res)=>{
    res.json({
        posts:{
            title:'steph',
            content:'want to be a developer'
        }
    });
});

module.exports = router;