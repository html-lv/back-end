// const {Client} = require('pg');

// const client = new Client({
//     host: "localhost",
//     user: "postgres",
//     port: 5433,
//     password: "mysecurepassword",
//     database: "mydatabase"
// })


// client.connect();

// client.query(`select * from employee`, (err, res) => {
//     if(!err){
//         console.log(res.rows)
//     } else {
//         console.log("Error occured" + err.message)
//     }
//     client.end;
// });