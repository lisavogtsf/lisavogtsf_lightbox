var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var xhr = new XMLHttpRequest();
var config = require('./config');

var app = express();


// set up view engine
app.set('view engine', 'ejs');

// serve static content
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {

	// leave open for other searches in the future
	var defaultSearchTerm = "cats";
	var searchTerm = searchTerm || defaultSearchTerm;
	var defaultSearchLimit = 25;
	var limit = limit || defaultSearchLimit;

	// put together search url
	var flickrSearchUrl = "https://www.flickr.com/services/rest/?method=flickr.photos.search&format=json";
	flickrSearchUrl += "&api_key=" + config('FLICKR_KEY');
	flickrSearchUrl += "&limit=" + defaultSearchLimit;
	flickrSearchUrl += "&nojsoncallback=1";
	flickrSearchUrl += "&text=" + searchTerm;

	// search flickr api for photos matching term
	xhr.open('GET', flickrSearchUrl);
	xhr.onreadystatechange = function () {
		if ((xhr.readyState === 4) && (xhr.status === 200)) {
			var data = JSON.parse(xhr.responseText);
			var photos = data.photos.photo;
			var photoUrls =[];

			for (var i = 0; i < limit; i++) {
				var photo = photos[i];

				var photoUrl = "https://farm" + photo.farm;
				photoUrl += ".staticflickr.com/" + photo.server;
				photoUrl += "/" + photo.id;
				photoUrl += "_" + photo.secret + ".jpg";

				photoUrls[i] = photoUrl;
			}

			// send those photos to render
			res.render('index', {photos: photos, photoUrls: photoUrls, limit: limit, searchTerm: searchTerm});
		}
	};
	xhr.send();

});

app.listen((config('PORT') || 3000), function (err) {
	if (err) {
		throw err;
	}

	console.log('listening on port ' + config('PORT') || 3000);
});