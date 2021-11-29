const express = require("express");
const model = require("./model");

const categoryRouter = express.Router();

categoryRouter.get("/", async (req, res) => {
  const [categories] = await model.query("select * from categories;");
  const [subCategories] = await model.query("select * from sub_Categories");
  console.log(categories);
  console.log(subCategories);
  return res.json({ categories, subCategories });
});

module.exports = categoryRouter;
