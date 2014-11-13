var express = require('express');
var app = express();
var Sequelize = require("sequelize");
var bodyParser = require('body-parser');
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

var routes = require('./routes/index')
var students = require('./routes/students')
var models = require('./models')


app.set('models', require('./models'));


app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

app.use(express.static(__dirname + '/public'))
app.use('/', routes);
app.use('/students', students)


// app.get ('/', function(req, res){
//   res.render('index.ejs')
// });

app.set('port', 3000)

models.sequelize.sync().success(function () {
  var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
  });
});

module.exports = app;
