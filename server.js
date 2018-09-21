// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var Twit = require('twit');
const { consumer_key, consumer_secret, access_token, access_token_secret } = require('./config');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

var T = new Twit({
  consumer_key,
  consumer_secret,
  access_token,
  access_token_secret
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
