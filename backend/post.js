const express = require("express");
const model = require("./model");

const postRouter = express.Router();

postRouter.get("/", async function (req, res) {
  let getQueryParam = req.query.params;
  console.log("getqueryParam : ", getQueryParam);
  let query = "select * from categories";
  try {
    let [categories] = await model.query(query);
    for (let i = 0; i < categories.length; i++) {
      let categoryId = categories[i].id;
      let [postContents] = await model.query(
        "select * from posts where category_id =? and sub_category_id = (select id from sub_categories where name_kr = '자유게시판'and parent_category_id = ?)",
        [categoryId, categoryId]
      );
      //조건문을 밖에서 쿼리파람으로 요청
      // 문법에 맞게 사용 물음표와 [] 사용해서 변수로 삽입
      //포스트는 포스트.js안에만 있어야함
      //화면에 맞춰서 api생성하면 효율이 많이 떨어짐
      //객체 지향인걸 잊으면 안됨
      categories[i].contents = postContents;
    }
    return res.json(categories);
  } catch (err) {
    console.log(err);
    return err;
  }
});

module.exports = postRouter;
