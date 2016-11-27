var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
  user: 'santhoshanand4080', //env var: PGUSER
  database: 'santhoshanand4080', //env var: PGDATABASE
  host: 'db.imad.hasura-app.io', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  password:process.env.DB_PASSWORD //env var: PGPASSWORD
};
var pool = new Pool(config);
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/santhoshanand4080', function(req,res)
{
pool.query('select * from TBResume',function(err,result){
    if(err)
    {
        res.status(500).send(err);
    }
    else
    {
       res.send(JSON.stringify(result));
    }
    
    });
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
