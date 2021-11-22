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
  mainRouter.get("/:category/freePost", (req, res) => {
    let category = req.params.category;
    if(category == "media"){contents = 1}
    if(category == "theater"){contents = 2}
    if(category == "musical"){contents = 3}
    if(category == "dancer"){contents = 4}
    let query = 'select board_id,title from board where category_number ='+contents+' limit 6'  ;
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