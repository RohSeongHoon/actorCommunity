const express = require("express");
const model = require("./model");

const usersRouter = express.Router();

usersRouter.post("/checkId", async (req, res) => {
  let id = req.body.checkId;
  console.log(`users.js:8 id=${id}`);
  let query = 'SELECT COUNT(*) as "checkid" FROM users WHERE id = ?';
  try {
    let checkId = await model.query(query, [id]);
    console.log(`users.js:11 checkid = ${checkId}`);
    return res.json(checkId);
  } catch (err) {
    console.log(err);
    return err;
  }
});

module.exports = usersRouter;
// 회원가입
//아이디 중복확인
//비밀번호 확인
//
// 로그인
// 아이디찾기
// 비번찾기
