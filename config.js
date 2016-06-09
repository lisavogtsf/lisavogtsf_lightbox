var dotenv = require('dotenv');
var ENV = process.env.NODE_ENV || 'development';

if (ENV === 'development') {
	dotenv.load();
} 

var config = {
  ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  FLICKR_KEY: process.env.FLICKR_KEY,
  FLICKR_SECRET: process.env.FLICKR_SECRET
}

module.exports = function (key) {
	if (!key) {
		return config;
	}

	return config[key];
}
