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
    let query = 'select * from '+contents+' limit 4;' ;
    model.query(query,function(err,result){
      if(err){
        console.log(err);
        return err
      }
      res.json(result);
    })
  });

  module.exports = mainRouter;