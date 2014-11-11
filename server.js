var express = require('express');
var app = express();
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs-layouts')
app.use(express.static(__dirname + '/public'))

app.get ('/', function(req, res){
  res.render('index.ejs')
});

app.listen(3000);
console.log('Listening to port 3000')