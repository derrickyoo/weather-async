console.log('Starting app');

const dotenv = require('dotenv');
const request = require('request');

dotenv.load();

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY
const requestURL = `https://maps.googleapis.com/maps/api/geocode/json?key=${GOOGLE_MAPS_API_KEY}&address=Tucson` 

request({
  url: requestURL,
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(body, undefined, 2));
});
