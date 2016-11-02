var express = require('express');
var morgan = require('morgan');
var path = require('path');

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

app.get('/ui/ravi-min.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'ravi-min.png'));
});

app.get('/ui/ravilarge.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'ravilarge.png'));
});

app.get('/ui/fb.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'fb.jpg'));
});

app.get('/ui/gmail.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'gmail.jpg'));
});

app.get('/ui/github.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'github.jpg'));
});
app.get('/ui/linkedin.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'linkedin.jpg'));
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
