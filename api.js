const client = require('./connection.js');
const express = require('express');

const app = express();

// app.get('/home', function(req, res){
//     res.send("Welcome")
// })

// app.post('/', function(req, res) {
//     console.log("Request")
//     res.send("Welcome")
// })

// app.delete('/delete', function(req, res) {
//     console.log("Delete")
//     res.send("Delete")
// })

app.listen(3300, ()=> {
    console.log("Server is now listening at port 3300")
});

const bodyParser = require("body-parser");
app.use(bodyParser.json());

client.connect();

app.get('/employees', (req, res) => {
    client.query(`Select * from employee`, (err, result) => {
        if(!err){
            res.send(result.rows)
        } else if(err)
            res.send(err.message)
    })
})

app.get('/employees/:id', (req, res) => {
    client.query(`Select * from employee where id=${req.params.id}`, (err, result) => {
        if(!err){
            res.send(result.rows)
        }
    })
    client.end
})

app.post('/employee', (req, res) => {
    const employee = req.body;
    let insertQuery = `insert into employee(id, first_name, last_name, office, birth_day, phone)
     values(${employee.id}, '${employee.first_name}', '${employee.last_name}', '${employee.office}', '${employee.birth_day}', '${employee.phone}')                    
    `
    client.query(insertQuery, (err, result) => {
        if(!err){
            res.send('All good')
        } else {
            console.log(err.message)
        }
    })
    client.end;
})