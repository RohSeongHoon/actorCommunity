const express = require("express");
const model = require("./model");

const categoryRouter = express.Router();

// categoryRouter.get("/", async (req, res) => {
//   const [categories] = await model.query("select * from categories;");
//   const [subCategories] = await model.query("select * from sub_Categories");
//   console.log(categories);
//   console.log(subCategories);
//   return res.json({ categories, subCategories });
// });
categoryRouter.get("/", async (req, res) => {
  const query = "select * from categories";
  try {
    let [categories] = await model.query(query);
    return res.json(categories);
  } catch (err) {
    console.log(err);
    return err;
  }
});

categoryRouter.get("/subcategories", async (req, res) => {
  const query = "select * from sub_categories";
  try {
    let [subCategories] = await model.query(query);
    return res.json(subCategories);
  } catch (err) {
    console.log(err);
    return err;
  }
});

module.exports = categoryRouter;
