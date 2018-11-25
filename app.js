console.log('Starting app');

const dotenv = require('dotenv');
const yargs = require('yargs');
const request = require('request');

dotenv.load();

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY

const argv = yargs
  .options({
    address: {
      demand: true,
      alias: 'a',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

console.log(argv);

let encodedAddress = encodeURIComponent(argv['address']);
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
