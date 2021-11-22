const express = require('express');
const model = require('./model')

const mainRouter = express.Router();

  
  
  mainRouter.get("/videos", (req, res) => {
    let query = 'SELECT * FROM main_videos LIMIT 4;'
    model.query(query,function(err,result){
      if(err){
        console.log(err);
        return err
      }
      res.json(result)
    })
  });
  
  mainRouter.get("/postTitle", (req, res) => {
    let query = 'select * from main_communities;';
    model.query(query,function(err,result){
      if(err){
        console.log(err);
        return err
      }
      res.json(result);
    })
  });
  mainRouter.get("/mainPost/:contents", (req, res) => {
    let contents = req.params.contents;
    if(contents == "media_freepost"){contents = 1}
    if(contents == "theater_freepost"){contents = 2}
    if(contents == "musical_freepost"){contents = 3}
    if(contents == "dancer_freepost"){contents = 4}
    let query = 'select title from board where category_number ='+contents+' limit 6'  ;
    //댓글수는 어떻게 넣지 
    model.query(query,function(err,result){
      if(err){
        console.log(err);
        return err
      }
      res.json(result);
    })
  });

  module.exports = mainRouter;