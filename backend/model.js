let mysql = require('mysql');
//만들던지 다운 받아야함  npm

let connection = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'qsc20215',
    database:'actor_community'
})

connection.connect(function(err){
    if(err) throw err;
    console.log('connection success');

    // let query = 'select * from sample21 limit 1';
    // let result =  connection.query(query,function(err,result){
    //   let result2 =  JSON.stringify(result)
    //     console.log(result2);
    // });
})
module.exports = connection

