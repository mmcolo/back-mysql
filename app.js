const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql'); 

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'turbulences'
});

const app = express();

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Header', 'Origin, X-requested-With, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow','GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

con. connect((err)=>{
    if(err) throw err;
    console.log("Connected!");
});

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('api/users/je',(req, res)=>{
    let blue = 'RayanDaxton'
    let sql = "SELECT * FROM utilisateur WHERE "+blue;
    console.log(sql);
    res.status(200).json({sql});
});

app.get('/api/users', (req, res)=>{
    let sql="SELECT * FROM  utilisateur"
    con.query(sql, (err, result)=>{
        if(err){
            res.status(400).json({err});
        }
        res.status(200).json({result})
        console.log(result);
    })
});

module.exports = app;