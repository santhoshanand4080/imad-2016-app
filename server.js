var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pg= require('pg');


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

var pg = new pg.Pool('config');

var config = {
  user: 'santhoshanand4080', //env var: PGUSER
  database: 'santhoshanand4080', //env var: PGDATABASE
  password:PROCESS.EMV.DB_PASSWORD, //env var: PGPASSWORD
  host: 'db.imad.hasura-app.io', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};


app.get('/santhoshanand4080', function(req,res)
{

pg.query(' select * from TBResume',function(req,res){
    
    if(err)
    {
        res.status(500).send(err.tostring);
    }
    else
    {
        res.send(Jason.stringify(result));
    }
    
    }
    }
}
})

});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
