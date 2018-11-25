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

console.log(argv);

geocode.geocodeAddress(argv.address, (error, results) => {
  if (error) {
    console.log(error);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
  }
});

// TODO: Take in lat and lng from geocodeAddress
forcast.getWeather(32.2226066, -110.9747108, (error, results) => {
  if (error) {
    console.log(error);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
  }
});
