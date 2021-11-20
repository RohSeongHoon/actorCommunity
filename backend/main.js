const express = require('express');
const model = require('./model')

const mainRouter = express.Router();


  
 
  
  var mainCommunities = {
    communities: [
      {
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

  
  
  mainRouter.get("/videos", (req, res) => {
    let query = 'SELECT * FROM main_videos LIMIT 4;'
    model.query(query,function(err,result){
      if(err){
        console.log(err);
        return err
      }
      res.json(result)
    })
  });
  
  mainRouter.get("/postTitle", (req, res) => {
    let query = 'select * from main_communities;';
    model.query(query,function(err,result){
      if(err){
        console.log(err);
        return err
      }
      res.json(result);
    })
  });

  module.exports = mainRouter;