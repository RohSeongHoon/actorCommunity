// const mysql = require("mysql2/promise");
// const Promise = require("bluebird");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "qsc20215",
//   database: "actor_community",
// });
// let poolPromise = pool.promise();
//블루버드 모듈사용 하지만 promise()함수가 이해안되서 새로 짬
const mysql = require("mysql2/promise");
const pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qsc20215",
  database: "actor_community",
});

module.exports = pool;

//데이터베이스 테이블 생성시에 _가 2번이상 들어가면 좋지않다고 하는데
//매체연기 카테고리 안에 영상 , 오디션정보 , 자유게시판 이런식으로 소규모가 있다면 어떤식으로 테이블명을 명세해야하는지 모르겠음
//그리고 만약 게시물 안에 댓글들이 리스트라면 게시물 테이블에서 댓글 테이블을 참조하는 것으로 생성하면 되는지
