const express = require("express");

const a = express.Router();

a.get("/", (req, res) => {
  res.json(categories);
});

a.get("/mediaAudition", (req, res) => {
  res.json(auditionPosts);
});

a.get("/mediaActorVideos", (req, res) => {
  res.json(videoPosts);
});

module.exports = a;
