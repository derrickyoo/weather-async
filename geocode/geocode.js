console.log('Starting geocode/geocode.js');

const request = require('request');
const dotenv = require('dotenv');

dotenv.load();

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY

let geocodeAddress = (address) => {
  let encodedAddress = encodeURIComponent(address);
  console.log(encodedAddress);
  
  let requestURL = `https://maps.googleapis.com/maps/api/geocode/json?key=${GOOGLE_MAPS_API_KEY}&address=${encodedAddress}`; 
  
  request({
    url: requestURL,
    json: true
  }, (error, response, body) => {
    if (error){
     console.log('Unable to connect to Google servers.') 
    } else if (body.status === 'ZERO_RESULTS') {
      console.log('Unable to find the address.')
    } else if (body.status === 'OK') {
      let results = body['results'][0];
    
      console.log(`Address: ${results.formatted_address}`);
      console.log(`Latitude: ${results.geometry.location.lat}`);
      console.log(`Longitude: ${results.geometry.location.lng}`);
    }
  });
}
  
module.exports = { geocodeAddress };
