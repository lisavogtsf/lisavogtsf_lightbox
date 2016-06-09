var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var config = require('./config');

var accessPhotoApi = require('./public/scripts/accessPhotoApi');

var app = express();

// set up view engine
app.set('view engine', 'ejs');

// serve static content
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	accessPhotoApi.test();
	res.render('index');
});

app.listen((config('PORT') || 3000), function (err) {
	if (err) {
		throw err;
	}

	console.log('listening on port ' + config('PORT') || 3000);
});