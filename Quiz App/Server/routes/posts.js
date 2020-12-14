const express = require('express');
const router = express.Router();

const Question = require('../models/Post')

//!  ROUTES 

router.get('/',(req,res)=>{
    res.send('We are on posts');
});

router.post('/',(req,res)=>{
    console.log(req.body);
    res.send(req.body)
    const question = new Question({
        qId:req.body.qId,
        qText:req.body.qText
    })
    question.save()
    .then(data=>res.json(data))
    .catch(err=>res.json({ErrorMessage:err}))
})





module.exports = router;