const express = require("express");
const cors = require("cors");
const categoryRoute = require("./categories");

const app = express();
const port = 3000;

var sidebar = [
  {
    category: "midaActor",
    categoryKr: "매체연기",
    categoryLink:
      "/Users/nohsounghoon/Desktop/web/actorCommunity/community/media-actor.html",
  },
  {
    category: "theaterActor",
    categoryKr: "연극연기",
    categoryLink:
      "/Users/nohsounghoon/Desktop/web/actorCommunity/community/theaterActor.html",
  },
  { category: "musical", categoryKr: "뮤지컬", categoryLink: "#" },
  { category: "dancing", categoryKr: "무용", categoryLink: "#" },
];

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

var videos = {
  videos: [
    {
      videoTitle: "한이 쌓인 시간 -양준모 ",
      videoUrl: "https://www.youtube.com/embed/OsRogAzmsF8",
      postLink:
        "/Users/nohsounghoon/Desktop/web/actorCommunity/community/video-post-main.html",
      videoWriter: "김아무게",
    },
    {
      videoTitle: "빅마마 킬링벌스 ",
      videoUrl: "https://www.youtube.com/embed/OsRogAzmsF8",
      postLink:
        "/Users/nohsounghoon/Desktop/web/actorCommunity/community/video-post-main.html",
      videoWriter: "아무무",
    },
    {
      videoTitle: "로니콜먼 근황 ",
      videoUrl: "https://www.youtube.com/embed/nUCMTI2HPg0",
      postLink:
        "/Users/nohsounghoon/Desktop/web/actorCommunity/community/video-post-main.html",
      videoWriter: "로니",
    },
    {
      videoTitle: "마미손 킬링벌스 ",
      videoUrl: "https://www.youtube.com/embed/jLUa6brtC-c",
      postLink:
        "/Users/nohsounghoon/Desktop/web/actorCommunity/community/video-post-main.html",
      videoWriter: "릴릴",
    },
  ],
};

var mainCommunities = {
  communities: [
    {
      link: "./community/actor.html",
      category: "midaActor",
      categoryKr: "매체연기",
      contents: [
        {
          postTitle: "배우는게 너무 느리고~",
          commentCounts: 123,
          communityUrl:
            "/Users/nohsounghoon/Desktop/web/actorCommunity/community/media-actor-videos.html",
        },
        {
          postTitle: "냠냠",
          commentCounts: 123,
          communityUrl:
            "/Users/nohsounghoon/Desktop/web/actorCommunity/community/media-actor-videos.html",
        },
        {
          postTitle: "느리고~",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "배우는게 너무ㅁ왕라라ㅏㄹ 느리고~",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "너무 많아서 힘들어요~",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "참으로 많다 정말 ~",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
      ],
    },

    {
      link: "./community/musical.html",
      category: "theaterActor",
      categoryKr: "연극연기",
      contents: [
        {
          postTitle: "뮤지컬 재밋다~",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: " 가짜 데이터 ~",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "와랄랄ㄹ랄랄라라",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "나능루ㅜㅜ울",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "언제까지 어깨춤을 추게 할거야~",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "바니바니~",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
      ],
    },

    {
      link: "./community/vocal.html",
      category: "musical",
      categoryKr: "뮤지컬",
      contents: [
        {
          postTitle: "당근 당근",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "쭈꾸미",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "오징어",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "거미의 수컷은 크기가 작습니다",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "암컷 거미에게 잡아먹힐 가능성이 있기때문입니다",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "거미 징그렁",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
      ],
    },

    {
      link: "./community/performer.html",
      category: "dancing",
      categoryKr: "무용",
      contents: [
        {
          postTitle: "과거엔 인간과 소통한 돌고래가 있었습니다",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "그 돌고래는 인간에게 ",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "당신들은 무슨존재인가 라고 물어본적이있다고합니다",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "그 돌고래는 자살했습니다 ",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "너무 잔인하네요",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "돌고래 귀엽",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
      ],
    },
  ],
};
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

app.use(cors());

app.use("/categories", categoryRoute);

app.get("/sidebar", (req, res) => {
  res.json(sidebar);
});

app.get("/videos", (req, res) => {
  res.json(videos);
});

app.get("/posts", (req, res) => {
  res.json(mainCommunities);
});
app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`);
});
