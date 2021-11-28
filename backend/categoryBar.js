const express = require("express");
const model = require("./model");

const categoryRouter = express.Router();

categoryRouter.get("/", (req, res) => {
  let query = "select * from categories;";

  model.query(query, async function (err, category) {
    if (err) {
      console.log(err);
      return res.err;
    }
    try {
      let result = await getSubCategories(category);
      console.log(result);
      return res.json(result);
    } catch {
      console.log(err);
      return err;
    }
  });
});
let getSubCategories = (category) => {
  return new Promise((resolve) => {
    category.forEach((element) => {
      let getSubCategories =
        "select * from sub_categories where  parent_category_id=" + element.id;
      model.query(getSubCategories, function (err, subCategories) {
        if (err) {
          console.log(err);
          return res.err;
        }
        element.subCategories = subCategories;
        return element;
      });
    });
  });
};
module.exports = categoryRouter;
