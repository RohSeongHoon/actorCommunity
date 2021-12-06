const express = require("express");
const model = require("./model");

const categoryRouter = express.Router();

categoryRouter.get("/", async (req, res) => {
  const query = "select * from categories";
  try {
    let [categories] = await model.query(query);
    for (let i = 0; i < categories.length; i++) {
      let getSubCategories = await model.query(
        "select * from sub_categories where parent_category_id =" +
          categories[i].id
      );
      categories[i].subCategory = getSubCategories[0];
    }
    return res.json(categories);
  } catch (err) {
    console.log(err);
    return err;
  }
});
categoryRouter.get("/list/freePost", async (req, res) => {});
categoryRouter.get("/list/videos");

module.exports = categoryRouter;

//1. 카테고리와 하위 카테고리를 같이 받아서 온다
//2. 카테고리를 받아온다
//3. for문을 돌면서 카테고리 아이디가 1인 하위카테고리를 아이디가 1인 카테고리에 추가한다
//4. 값을 리턴한다

// categoryRouter.get("/", async (req, res) => {
//   const [categories] = await model.query("select * from categories;");
//   const [subCategories] = await model.query("select * from sub_Categories");
//   console.log(categories);
//   console.log(subCategories);
//   return res.json({ categories, subCategories });
// });
// categoryRouter.get("/", async (req, res) => {
//   const query = "select * from categories";
//   try {
//     let [categories] = await model.query(query);
//     return res.json(categories);
//   } catch (err) {
//     console.log(err);
//     return err;
//   }
// });
