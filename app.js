console.log('Starting app');

const dotenv = require('dotenv');
const request = require('request');

dotenv.load();

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY
const environment = process.env.NODE_ENV
const requestURL = `https://maps.googleapis.com/maps/api/geocode/json?key=${GOOGLE_MAPS_API_KEY}&address=Tucson` 

if (environment !== 'production') {
  console.log("Running development environment")
  let getGeo = (callback) => {
    let data = require('./googleapis-example.json');

    setTimeout(() => {
      callback(data);
    }, 1000);
  }

  getGeo((data) => {
    console.log(JSON.stringify(data, undefined, 2));
  });
} else {
  console.log("Running production environment")
  request({
    url: requestURL,
    json: true
  }, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
  });
}
