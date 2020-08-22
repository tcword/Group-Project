const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');

app.use(cors());

const SELECT_ALL = 'SELECT * FROM users';

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password1!",
  database: "auth",
});

connection.connect(err => {
    if(err) {
        return err;
    }
});

console.log(connection)


//read
app.get("/", (req, res) => {
  res.send("go to /order to see order status");
});

app.get('/order', (req, res) => {
    connection.query(SELECT_ALL, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    });
});

app.get('/order/add', (req, res) => {
    const { FirstName, LastName } = req.query;
    const INSERT_ORDER = `INSERT INTO users(FirstName, LastName) VALUES('${FirstName}', '${LastName}')`
    connection.query(INSERT_ORDER, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.send('successfully added')
        }
    });
})



//update


//delete

app.listen(4000, () => console.log('Port 4000 is running...'));