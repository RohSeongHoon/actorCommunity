const express = require('express');
const model = require('./main');

const postRouter = express.Router();


postRouter.get('http://localhost:3000/media/freePost/:number',(req,res)=>{
    let number = param.req.number;
    let query = 
    'select category_number,title,writer,content,write_date from board where board_id='+number;
    model.query(query,function(err,result){
        if(err){
            console.log(err);
            return err;
        }
        res.json(result)
    })
})
postRouter.get('/freePost/:number',(req,res)=>{
    let number = param.req.number;
    let query = 
    'SELECT * FROM comment where board =' + number ;
    model.query(query,function(err,result){
        if(err){
            console.log(err);
            return err;
        }
        res.json(result)
    })
})

module.exports = postRouter;