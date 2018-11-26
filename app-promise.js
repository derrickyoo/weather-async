console.log('Starting app-promise.js');

const axios = require('axios');
const yargs = require('yargs');
const dotenv = require('dotenv');

dotenv.load();

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY
const DARK_SKY_API_KEY = process.env.DARK_SKY_API_KEY;

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

console.log('---')
console.log(argv);
console.log('---')

let encodedAddress = encodeURIComponent(argv.address);
let geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?key=${GOOGLE_MAPS_API_KEY}&address=${encodedAddress}`; 


axios.get(geocodeURL).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find address.');
  }

  let lat = response.data.results[0].geometry.location.lat;
  let lng = response.data.results[0].geometry.location.lng;
  let forcastURL = `https://api.darksky.net/forecast/${DARK_SKY_API_KEY}/${lat},${lng}`;
  
  console.log(response.data.results[0].formatted_address);

  return axios.get(forcastURL);
}).then((response) => {
  let temperature = response.data.currently.temperature;
  let apparentTemperature = response.data.currently.apparentTemperature;
  
  console.log(`It is currently ${temperature}.`);
  console.log(`It feels like ${apparentTemperature}.`);
}).catch((e) => {
  if (e.code === 'ENOTFOUND') {
    console.log('Unable to connect to API servers.');
  } else {
    console.log(e.message);
  }
});
