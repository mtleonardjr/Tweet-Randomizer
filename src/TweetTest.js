var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

T.get('search/tweets', { q: 'anything', count: 10 }, function(
  err,
  data,
  response
) {
  var tweets = data.statuses;
  console.log(tweets[0].text);
  console.log(tweets[0].id);
});
