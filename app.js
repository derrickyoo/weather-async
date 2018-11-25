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
  console.log(JSON.stringify(body, undefined, 2));
});
