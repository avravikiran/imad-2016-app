var express = require('express');
var morgan = require('morgan');
var Pool = require('pg').Pool;
var path = require('path');


var config = {
  user: 'avravikiran',
  host: 'db.imad.hasura-app.io',
  password: process.env.DB_PASSWORD,
  port: '5432',
  database: 'avravikiran',
};

 var onError = function(err) {
    console.log(err.message, err.stack)
    res.writeHead(500, {'content-type': 'text/plain'});
    res.end('An error occurred');
  };
  
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

var pool = new Pool(config)

app.get('/ui/a', function (req, res) {''
  pool.query("INSERT INTO user VALUES ('A','B','C')",function(err){
      if (err) return onError(err);
      res.end('done');
  });
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/ravi-min.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'ravi-min.png'));
});

app.get('/ui/ravilarge.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'ravilarge.png'));
});

app.get('/ui/fb.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'fb.jpg'));
});

app.get('/ui/gmail.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'gmail.png'));
});

app.get('/ui/github.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'github.png'));
});

app.get('/ui/linkedin.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'linkedin.png'));
});

app.get('/ui/blog.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blog.html'));
});

app.get('/ui/blog.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blog.css'));
});

app.get('/ui/twitter.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'twitter.jpg'));
});

app.get('/ui/photo.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'photo.html'));
});

app.get('/ui/profile.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'profile.html'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
