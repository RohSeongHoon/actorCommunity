const express = require("express");
const model = require('./model')
const cors = require("cors");

const categoryRoute = require("./categories");
const mainRouter = require("./main");
const mediaActorsRouter = require('./mediaActors')
const theaterActorsRouter = require('./theaterActors')

const app = express();
const port = 3000;





app.use(cors());

app.use('/',mainRouter)

app.use("/categories", categoryRoute);

app.use("/categories/mediaActors", mediaActorsRouter);

app.use('/categories/theaterActors',theaterActorsRouter);

app.get('/aaa',function(req,res){
  let query = 'select * from sample21';
  model.query(query,function(err,result){    
    console.log(result);
    res.json(result)
  })
})
console.log('이게 먼저실행');


app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`);
});

//지금은 index에서 카테고리를 받으면 카테고리 파일로 넘겨준다음 결과값을 받아오는 형식 
//카테고리 안에 있는 매체연기,연극연기,뮤지컬,무용 카테고리들 안데 또 영상,오디션정보,커뮤니티로 나누워져있다면 
// 