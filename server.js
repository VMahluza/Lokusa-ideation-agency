var express = require('express');
var path = require('path');
var app = express();

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {res.render('index', { title : 'Hello' })})
// error handler
app.listen(3000)