const express = require('express');
const router = express.Router();
const db = require('../config/connect.js');

router.get('/:pid', function(req,res){
    db.getEntry(req.params.pid, function(err, result){
        console.log(req.params.pid);
        console.log(result);
        
        res.render('Pages/entry',{
            id: req.params.pid,
            post: result
        });
    });
});


module.exports = router;