const express = require("express");
const model = require('./model')
const cors = require("cors");

const categoryRoute = require("./categoriesBar");
const mainRoute = require("./main");
const mediaActorsRoute = require('./mediaActors')
const theaterActorsRoute = require('./theaterActors')

const app = express();
const port = 3000;

app.use(cors());

app.use('/',mainRoute)

app.use("/categoriesBar", categoryRoute);

app.use("/categories/mediaActors", mediaActorsRoute);

app.use('/categories/theaterActors',theaterActorsRoute);

app.get('/posts', function(req, res) {
  let writer = req.query.writer;

  if (!writer) {
    return res.json({'error' : 'writer NOT FOUND'});
  }

  let query = 'SELECT * FROM board WHERE writer = "' + writer + '"';
  console.log(query);
  model.query(query, function(err, result) {
    if (err) {
      console.log(err);
      return res.json({'error' : 'MYSQL ERROR'});
    }
    return res.json(result);
  })
});

app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`);
});

//지금은 index에서 카테고리를 받으면 카테고리 파일로 넘겨준다음 결과값을 받아오는 형식 
//카테고리 안에 있는 매체연기,연극연기,뮤지컬,무용 카테고리들 안데 또 영상,오디션정보,커뮤니티로 나누워져있다면 
// 