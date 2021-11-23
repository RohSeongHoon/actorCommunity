const express = require("express");
const model = require("./model");

const categoriesRouter = express.Router();

categoriesRouter.get("/", (req, res) => {
  let query = "select * from categories;";
  model.query(query, function (err, result) {
    if (err) {
      console.log("categoriesBar.js 에 13번째 줄 에러");
      return res.json({ error: "에러이이" });
    }
    return result;
  });
});

categoriesRouter.get("/subCategories", (req, res) => {
  let subCategory = res.query.subCategory;
  let query =
    "select * from sub_categories where parent_category_id=" + subCategory;
  model.query(query, function (err, result) {
    if (err) {
      console.log("categoriesBar.js 24번 에러");
      return res.json({ error: "에러이이" });
    }
    return result;
  });
});

module.exports = categoriesRouter;
