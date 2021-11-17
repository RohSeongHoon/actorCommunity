const express = require("express");
const mediaActorsRouter = require('./mediaActors')

const categoriesRouter = express.Router();

var categories = [
  {
    category: "mediaActor",
    categoryKr: "매체연기",
    categoryLink:
      "/Users/nohsounghoon/Desktop/project/actorCommunity/frontend/community/media-actor-videos.html",
    contents: [
      {
        postLink:
          "/Users/nohsounghoon/Desktop/project/actorCommunity/frontend/community/media-actor-videos.html",
        postName: "actorVideo",
        postNameKr: "연기영상",
      },

      { postLink: "/Users/nohsounghoon/Desktop/project/actorCommunity/frontend/community/media-actor-aution.html", postName: "audition", postNameKr: "오디션정보" },

      { postLink: "#", postName: "community", postNameKr: "커뮤니티" },
    ],
  },
  {
    category: "theater",
    categoryKr: "연극연기",
    categoryLink: "../test/community/vocal.html",
    contents: [
      { postLink: "#", postName: "vocalVideo", postNameKr: "보컬영상" },

      { postLink: "#", postName: "audition", postNameKr: "오디션정보" },

      { postLink: "#", postName: "community", postNameKr: "커뮤니티" },
    ],
  },
  {
    category: "musical",
    categoryKr: "뮤지컬",
    categoryLink: "../test/community/musical.html",
    contents: [
      { postLink: "#", postName: "musicalVideo", postNameKr: "뮤지컬영상" },

      { postLink: "#", postName: "audition", postNameKr: "오디션정보" },

      { postLink: "#", postName: "community", postNameKr: "커뮤니티" },
    ],
  },

  {
    category: "dancing",
    categoryKr: "무용",
    categoryLink: "../test/community/performer.html",
    contents: [
      { postLink: "#", postName: "dancingVideo", postNameKr: "무용영상" },

      { postLink: "#", postName: "community", postNameKr: "커뮤니티" },
    ],
  },
];


categoriesRouter.get("/", (req, res) => {
  res.json(categories);
});

categoriesRouter.get("/mediaActor",mediaActorsRouter);



module.exports = categoriesRouter;
