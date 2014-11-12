var express = require('express');
var app = express();
var Sequelize = require("sequelize");

var routes = require('./routes/index')
var students = require('./routes/students')


app.set('models', require('./models'));

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs-layouts')

app.use(express.static(__dirname + '/public'))
app.use('/', routes);
app.use('/students', students);

app.get ('/', function(req, res){
  res.render('index.ejs')
});

app.listen(3000);
console.log('Listening to port 3000')

module.exports = app;
