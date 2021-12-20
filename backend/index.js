const express = require("express");
const cors = require("cors");
const app = express();

const port = 3000;
const bodyParser = require("body-parser");
const model = require("./model");
const categoryRoute = require("./categories");
const mainRoute = require("./main");
const postRoute = require("./posts");
const userRoute = require("./users");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", mainRoute);

app.use("/categories", categoryRoute);

app.use("/posts", postRoute);

app.use("/users", userRoute);

app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`);
});
// app.get("/posts", function (req, res) {
//   let writer = req.query.writer;
//   if (!writer) {
//     return res.json({ error: "writer NOT FOUND" });
//   }

//   let query = 'SELECT * FROM board WHERE writer = "' + writer + '"';
//   console.log(query);
//   model.query(query, function (err, result) {
//     if (err) {
//       console.log(err);
//       return res.json({ error: "MYSQL ERROR" });
//     }
//     return res.json(result);
//   });
// });
//지금은 index에서 카테고리를 받으면 카테고리 파일로 넘겨준다음 결과값을 받아오는 형식
//카테고리 안에 있는 매체연기,연극연기,뮤지컬,무용 카테고리들 안데 또 영상,오디션정보,커뮤니티로 나누워져있다면
//
