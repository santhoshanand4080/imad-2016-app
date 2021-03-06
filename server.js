var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
  host: 'db.imad.hasura-app.io',
  port: '5432',
  user: 'santhoshanand4080',
  password: process.env.DB_PASSWORD,
  database: 'santhoshanand4080'
};
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
var pool = new Pool(config);
app.get('/santhoshanand4080', function(req,res)
{
pool.query('SELECT * FROM "TBResume"',function(err,result){
    if(err)
    {
        res.status(500).send(err);
    }
    else
    {
        res.send(JSON.stringify(result.rows));
    }
    });
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

var article= {
    'article-one':{
     title:'Article One Santhosh anand',
     heading: 'Article 1',
     date:'Sep 5, 2016',
     content:'<table><tr><td>Organisation:;</td><td>$(Name)</td> </tr><tr><td>Current Profile :</td><td></td></tr><tr><td>Experience :</td><td></td></tr> <tr><td>Interests :</td> <td></td></tr></table>'     }
    }
