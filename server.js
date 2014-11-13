var express = require('express');
var app = express();
var http = require('http').createServer(app);
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')


app.get('/', function(request, response){
  response.render('index')
});

app.get('/createproject', function(request, response){
  response.render('createProject')
});

app.post('/form', function(request, response){

  console.log(request.body)
});

http.listen(3000);
console.log('Listening to port 3000')

module.exports = http;
