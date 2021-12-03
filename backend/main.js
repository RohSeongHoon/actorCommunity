const express = require("express");
const model = require("./model");

const mainRouter = express.Router();

mainRouter.get("/videos", async (req, res) => {
  let query = "SELECT * FROM main_videos LIMIT 4;";
  try {
    let [mainVideos] = await model.query(query);
    res.json(mainVideos);
  } catch (err) {
    console.log(err);
    return;
  }
});

mainRouter.get("/post", async (req, res) => {
  let query = "select * from categories";
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

module.exports = mainRouter;

// http://localhost:3000/home/mediaActor  매체연기 메인화면 비디오 화면
//// http://localhost:3000/home/mediaActor?category_number=비디오,오디션,자유게시판
//// http://localhost:3000/home/mediaActor?category_number=비디오,오디션,자유게시판&post_id=클릭한 게시물번호
//반복
