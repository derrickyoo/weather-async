console.log('Starting darksky/forcast.js');

const request = require('request');
const dotenv = require('dotenv');

dotenv.load();

const DARK_SKY_API_KEY = process.env.DARK_SKY_API_KEY;

let getForcast = (lat, lng, callback) => {
  let requestURL = `https://api.darksky.net/forecast/${DARK_SKY_API_KEY}/${lat},${lng}`;

  request({
    url: requestURL,
    json: true
  }, (error, response, body) => {
    if (error){
      callback('Unable to connect to Google servers.')
    } else {
      console.log(body);
      callback(undefined, {

      });
    }
  });
}

getForcast(32.2226066, -110.9747108, (error, results) => {
  if (error) {
    console.log(error);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
  }
});

module.exports = { getForcast };