console.log('Starting googlemaps/geocode.js');

const request = require('request');
const dotenv = require('dotenv');

dotenv.load();

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY

let geocodeAddress = (address, callback) => {
  let encodedAddress = encodeURIComponent(address);
  console.log(encodedAddress);
  
  let requestURL = `https://maps.googleapis.com/maps/api/geocode/json?key=${GOOGLE_MAPS_API_KEY}&address=${encodedAddress}`; 
  
  request({
    url: requestURL,
    json: true
  }, (error, response, body) => {
    if (error){
      callback('Unable to connect to Google servers.')
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Address not found.')
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
}

module.exports = { geocodeAddress };
