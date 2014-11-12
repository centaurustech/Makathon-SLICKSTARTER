var express = require('express');
var app = express();
var http = require('http').createServer(app);
var bodyParser = require('body-parser')

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs-layouts')
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get ('/', function(req, res){
  res.render('index.ejs')
});

app.get('/sign-up', function(req, res) {
  res.render('sign_up.ejs')
});

app.get('/my_profile', function(req, res){
  res.render('my_profile.ejs')
});

app.post('/my_profile', function(req, res){
  console.log(req.body.FirstName)
  console.log(req.body.LastName)
  res.render('my_profile.ejs')
});

http.listen(3000);
console.log('Listening to port 3000')

module.exports = http;