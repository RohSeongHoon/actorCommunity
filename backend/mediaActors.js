const express = require('express');

const mediaActorsRouter = express.Router();

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
  var freePosts = [
    {title: "자유게시판 ",
    writer: "오와와오",
    link: "/Users/nohsounghoon/Desktop/web/actorCommunity/community/nomal-post-main.html",
    numberOfComment: 11,
    views: 43,},
    {title: "자유게시판 재목",
    writer: "오와와오",
    link: "/Users/nohsounghoon/Desktop/web/actorCommunity/community/nomal-post-main.html",
    numberOfComment: 11,
    views: 43,},
    {title: "자ㅁㄴㅇㄹㅁㅇㄴㄹ유게시판 ",
    writer: "오와와오",
    link: "/Users/nohsounghoon/Desktop/web/actorCommunity/community/nomal-post-main.html",
    numberOfComment: 11,
    views: 43,},
    {title: "자ㅁㄴㅇㄹ유게시판 ",
    writer: "오와와오",
    link: "/Users/nohsounghoon/Desktop/web/actorCommunity/community/nomal-post-main.html",
    numberOfComment: 11,
    views: 43,},
    {title: "자유게ㅁㄴㅇㅎ시판 ",
    writer: "오와와오",
    link: "/Users/nohsounghoon/Desktop/web/actorCommunity/community/nomal-post-main.html",
    numberOfComment: 11,
    views: 43,},
    {title: "자유ㅁㅇㄴㄹ1123게시판 ",
    writer: "오와와오",
    link: "/Users/nohsounghoon/Desktop/web/actorCommunity/community/nomal-post-main.html",
    numberOfComment: 11,
    views: 43,},
  ]
  
  mediaActorsRouter.get("/videos",(req,res)=>{
    res.json(videoPosts)
  })
  mediaActorsRouter.get("/audition",(req,res)=>{
    res.json(auditionPosts)
  })
  mediaActorsRouter.get("/freePosts",(req,res)=>{
    res.json(freePosts)
  })

module.exports = mediaActorsRouter;