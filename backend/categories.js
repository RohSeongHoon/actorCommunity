const express = require("express");

const router = express.Router();

var categories = [
  {
    category: "mediaActor",
    categoryKr: "매체연기",
    categoryLink:
      "/Users/nohsounghoon/Desktop/web/actorCommunity/community/media-actor-videos.html",
    contents: [
      {
        postLink:
          "/Users/nohsounghoon/Desktop/web/actorCommunity/community/media-actor-videos.html",
        postName: "actorVideo",
        postNameKr: "연기영상",
      },

      { postLink: "#", postName: "audition", postNameKr: "오디션정보" },

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
var auditionPosts = [
  {
    title: "오디션 정보를 알아옴",
    writer: "김아무게",
    link: "/Users/nohsounghoon/Desktop/web/actorCommunity/community/nomal-post-main.html",
    numberOfComment: 21,
    views: 33,
  },
  {
    title: "논현에서 프로필을 돌렸어요 ",
    writer: "dfj",
    link: "/Users/nohsounghoon/Desktop/web/actorCommunity/community/nomal-post-main.html",
    numberOfComment: 21,
    views: 33,
  },
  {
    title: "강남에서 프로필을 돌리는데 너무나도 힘드네여",
    writer: "asdfa",
    link: "/Users/nohsounghoon/Desktop/web/actorCommunity/community/nomal-post-main.html",
    numberOfComment: 21,
    views: 33,
  },
  {
    title: "강남 뭐시기 뭐시기 뭐시기",
    writer: "134241",
    link: "/Users/nohsounghoon/Desktop/web/actorCommunity/community/nomal-post-main.html",
    numberOfComment: 21,
    views: 33,
  },
  {
    title: "강남",
    writer: "123123",
    link: "/Users/nohsounghoon/Desktop/web/actorCommunity/community/nomal-post-main.html",
    numberOfComment: 21,
    views: 33,
  },
  {
    title: "오디션 정보를 알아옴",
    writer: "asdff",
    link: "/Users/nohsounghoon/Desktop/web/actorCommunity/community/nomal-post-main.html",
    numberOfComment: 21,
    views: 33,
  },
  {
    title: "논현에서 프로필을 돌렸어요 ",
    writer: "김아sdgasdg",
    link: "/Users/nohsounghoon/Desktop/web/actorCommunity/community/nomal-post-main.html",
    numberOfComment: 21,
    views: 33,
  },
  {
    title: "강남에서 프로필을 돌리는데 너무나도 힘드네여",
    writer: "김아무게",
    link: "/Users/nohsounghoon/Desktop/web/actorCommunity/community/nomal-post-main.html",
    numberOfComment: 21,
    views: 33,
  },
  {
    title: "강남 뭐시기 뭐시기 뭐시기",
    writer: "aaaadf",
    link: "/Users/nohsounghoon/Desktop/web/actorCommunity/community/nomal-post-main.html",
    numberOfComment: 21,
    views: 33,
  },
  {
    title: "강남",
    writer: "sdffqf2",
    link: "/Users/nohsounghoon/Desktop/web/actorCommunity/community/nomal-post-main.html",
    numberOfComment: 21,
    views: 33,
  },
  {
    title: "오디션 정보를 알아옴",
    writer: "김아무게",
    link: "/Users/nohsounghoon/Desktop/web/actorCommunity/community/nomal-post-main.html",
    numberOfComment: 21,
    views: 33,
  },
  {
    title: "논현에서 프로필을 돌렸어요 ",
    writer: "asdfasf",
    link: "/Users/nohsounghoon/Desktop/web/actorCommunity/community/nomal-post-main.html",
    numberOfComment: 21,
    views: 33,
  },
  {
    title: "강남에서 프로필을 돌리는데 너무나도 힘드네여",
    writer: "김아무게",
    link: "/Users/nohsounghoon/Desktop/web/actorCommunity/community/nomal-post-main.html",
    numberOfComment: 21,
    views: 33,
  },
  {
    title: "강남 뭐시기 뭐시기 뭐시기",
    writer: "김아무게",
    link: "/Users/nohsounghoon/Desktop/web/actorCommunity/community/nomal-post-main.html",
    numberOfComment: 21,
    views: 33,
  },
  {
    title: "강남",
    writer: "김아무게",
    link: "/Users/nohsounghoon/Desktop/web/actorCommunity/community/nomal-post-main.html",
    numberOfComment: 21,
    views: 33,
  },
];
var videoPosts = [
  {
    link: "https://www.youtube.com/embed/reGPK8HsNBY",
    title: "모든 역경을 근육으로 극복한 형 ㅋㅋㅋㅋㅋ",
    writer: "러럴러",
    numberOfComment: 4,
    views: 3,
  },
  {
    link: "https://www.youtube.com/embed/exCn38p8bGs",
    title: "펀치 노래 ",
    writer: "러럴러",
    numberOfComment: 123123,
    views: 444,
  },
  {
    link: "https://www.youtube.com/embed/OsRogAzmsF8",
    title: "빅마마 노래",
    writer: "러럴러",
    numberOfComment: 4,
    views: 3,
  },
  {
    link: "https://www.youtube.com/embed/5ePKBm4spBg",
    title: "권진아 노래",
    writer: "러럴러",
    numberOfComment: 4,
    views: 3,
  },
  {
    link: "https://www.youtube.com/embed/23dZ5Aazy0Y",
    title: "시아준수 노래",
    writer: "러럴러",
    numberOfComment: 4,
    views: 3,
  },
  {
    link: "https://www.youtube.com/embed/reGPK8HsNBY",
    title: "모든 역경을 근육으로 극복한 형 ㅋㅋㅋㅋㅋ",
    writer: "러럴러",
    numberOfComment: 4,
    views: 3,
  },
  {
    link: "https://www.youtube.com/embed/exCn38p8bGs",
    title: "펀치 노래 ",
    writer: "러럴러",
    numberOfComment: 123123,
    views: 444,
  },
  {
    link: "https://www.youtube.com/embed/OsRogAzmsF8",
    title: "빅마마 노래",
    writer: "러럴러",
    numberOfComment: 4,
    views: 3,
  },
  {
    link: "https://www.youtube.com/embed/5ePKBm4spBg",
    title: "권진아 노래",
    writer: "러럴러",
    numberOfComment: 4,
    views: 3,
  },
  {
    link: "https://www.youtube.com/embed/23dZ5Aazy0Y",
    title: "시아준수 노래",
    writer: "러럴러",
    numberOfComment: 4,
    views: 3,
  },
];

router.get("/", (req, res) => {
  res.json(categories);
});

router.get("/mediaAudition", (req, res) => {
  res.json(auditionPosts);
});

router.get("/mediaActorVideos", (req, res) => {
  res.json(videoPosts);
});

module.exports = router;
