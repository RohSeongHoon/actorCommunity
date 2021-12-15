const express = require("express");
const model = require("./model");

const postRouter = express.Router();

postRouter.get("/freePostPreview", async (req, res) => {
  let query = "select name,name_kr,id from categories";
  try {
    let [categories] = await model.query(query);
    for (let i = 0; i < categories.length; i++) {
      let categoryId = categories[i].id;
      let [postContents] = await model.query(
        "select * from posts where category_id =" +
          categoryId +
          " and sub_category_id = (select id from sub_categories where name_kr = '자유게시판'and parent_category_id = " +
          categoryId +
          " )"
      );
      categories[i].contents = postContents;
    }
    return res.json(categories);
  } catch (err) {
    console.log(err);
    return err;
  }
});
postRouter.get("/", async (req, res) => {
  let postId = req.query.postId;
  let query = "select * from posts where post_id = " + postId;
  try {
    let [post] = await model.query(query);
    let [comment] = await model.query(
      "select * from comments where parent_post_id=" + post[0].post_id
    );
    post[0].comments = comment;
    return res.json(post[0]);
  } catch (err) {
    console.log(err);
    return err;
  }
});
postRouter.get("/list", async (req, res) => {
  let categoryId = req.query.categoryId;
  let subCategoryId = req.query.subCategoryId;

  try {
    let [category] = await model.query(
      "select name_kr from sub_categories where id=?",
      [subCategoryId]
    );
    let [postList] = await model.query(
      "SELECT post_id,title,writer,sauce,write_date,views FROM posts WHERE category_id=? AND sub_category_id =?",
      [categoryId, subCategoryId]
    );
    postList.categoryTitle = category[0];
    for (let i = 0; i < postList.length; i++) {
      let [commentCount] = await model.query(
        "SELECT count(*) AS count FROM comments WHERE parent_post_id = ?",
        [postList[i].post_id]
      );
      postList[i].commentCount = commentCount[0].count;
    }
    return res.json(postList);
  } catch (err) {
    console.log(err);
    return err;
  }

  // let [commentCount] = await model.query("select count(*) from comments");
});
postRouter.post("/add", async (req, res) => {
  const categoryId = req.query.categoryId;
  const subCategoryId = req.query.subCategoryId;
  const title = req.body.title;
  const contents = req.body.contents;
  console.log(`content =${contents}`);
  let query = `INSERT INTO posts(category_id,sub_category_id,writer,title,content,write_date) values(${categoryId},${subCategoryId},"작성자","${title}","${contents}",now())`;
  try {
    await model.query(query);
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
module.exports = postRouter;
