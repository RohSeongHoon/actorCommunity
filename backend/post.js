const express = require("express");
const model = require("./model");

const postRouter = express.Router();

postRouter.get("/mainFreePost", async function (req, res) {
  let subCategoryId = req.query.subCategoryId;
  try {
    let [postContents] = await model.query(
      "select * from posts where sub_category_id =" + subCategoryId
    );
    return res.json(postContents);
  } catch (err) {
    console.log(err);
    return err;
  }
});
//조건문을 밖에서 쿼리파람으로 요청
// 문법에 맞게 사용 물음표와 [] 사용해서 변수로 삽입
//포스트는 포스트.js안에만 있어야함
//화면에 맞춰서 api생성하면 효율이 많이 떨어짐
//객체 지향인걸 잊으면 안됨

postRouter.get("/post"), async function (req, res) {};
module.exports = postRouter;
