console.log('Starting app.js');

const yargs = require('yargs');

const geocode = require('./googlemaps/geocode');
const forcast = require('./darksky/forcast');
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

geocode.geocodeAddress(argv.address, (error, results) => {
  if (error) {
    console.log(error);
  } else {
    console.log(results.address);
    forcast.getWeather(results.latitude, results.longitude, (error, weatherResults) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`It is currently ${weatherResults.temperature}.`);
        console.log(`It feels like ${weatherResults.apparentTemperature}.`);
      }
    });
  }
});
