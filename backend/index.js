const express = require("express");
const cors = require("cors");
const mainRoute = require('./main');
const categoryRoute = require("./categories");
const mainRouter = require("./main");

const app = express();
const port = 3000;





app.use(cors());

app.use('/',mainRouter)

app.use("/categories", categoryRoute);




app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`);
});

//지금은 index에서 카테고리를 받으면 카테고리 파일로 넘겨준다음 결과값을 받아오는 형식 
//카테고리 안에 있는 매체연기,연극연기,뮤지컬,무용 카테고리들 안데 또 영상,오디션정보,커뮤니티로 나누워져있다면 
// 