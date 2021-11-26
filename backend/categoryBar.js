const express = require("express");
const model = require("./model");

const categoryRouter = express.Router();

categoryRouter.get("/", (req, res) => {
  let query = "select * from categories;";

  model.query(query, function (err, result) {
    if (err) {
      console.log(err);
      return res.err;
    }
  });
  model.query(query, function (err, result) {
    if (err) {
      console.log(err);
      return res.err;
    }
    for (let i = 1; i < result.length; i++) {
      let getSubCategories =
        "select * from sub_categories where parent_category_id=" + result[i].id;
      model.query(getSubCategories, function (err, subCategories) {
        if (err) {
          console.log(err);
          return res.err;
        }
        result[i].subCategories = subCategories;
        console.log(result[i]);
      });
    }
    return res.json(result);
  });
});

module.exports = categoryRouter;
