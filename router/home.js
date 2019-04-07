const express = require('express');
const router = express.Router();
const db = require('../config/connect.js');

router.get('/', function(req, res){
    db.getPosts(function(err, result){
        /*if(err)
        {
            res.render('Pages/error', {
                code: result.code,
                message: err
            });
        }*/
        //result = JSON.parse(result);
        console.log(result);
        res.render('Pages/home', {posts: result});
    });

    //res.render('Pages/home2');
});

module.exports = router;
