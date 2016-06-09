var dotenv = require('dotenv');
var ENV = process.env.NODE_ENV || 'development';

if (ENV === 'development') {
	dotenv.load();
} 

var config = {
  ENV: process.env.NODE_ENV,
  PORT: process.env.PORT
}

module.exports = function (key) {
	if (!key) {
		return config;
	}

	return config[key];
}
