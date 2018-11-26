console.log('Starting playground/promises-2.js');

const request = require('request');
const dotenv = require('dotenv');

dotenv.load();

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY

let geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    let encodedAddress = encodeURIComponent(address);
    let requestURL = `https://maps.googleapis.com/maps/api/geocode/json?key=${GOOGLE_MAPS_API_KEY}&address=${encodedAddress}`; 
    
    request({
      url: requestURL,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject('Unable to connect to Google servers.');
      } else if (body.status === 'ZERO_RESULTS') {
        reject('Address not found.')
      } else if (body.status === 'OK') {
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    });
  });
}

geocodeAddress('asdf').then((res) => {
  console.log(JSON.stringify(res, undefined, 2));
}, (error) => {
  console.log(error);
});
