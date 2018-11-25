console.log('Starting darksky/forcast.js');

const request = require('request');
const dotenv = require('dotenv');

dotenv.load();

const DARK_SKY_API_KEY = process.env.DARK_SKY_API_KEY;

let getWeather = (lat, lng, callback) => {
  let requestURL = `https://api.darksky.net/forecast/${DARK_SKY_API_KEY}/${lat},${lng}`;

  request({
    url: requestURL,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200){
      callback(undefined, {
        temperature: body.currently.temperature
      });
    } else {
      callback('Unable to fetch weather.')
    }
  });
}

module.exports = { getWeather };
