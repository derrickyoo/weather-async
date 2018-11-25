console.log('Starting app in development mode');

const yargs = require('yargs');
const exampleData = require('./googleapis-example.json');

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

// Using setTimeout to mimic an async API request
let getGeo = (callback) => {
  let body = exampleData;

  setTimeout(() => {
    callback(body);
  }, 1000);
}

getGeo((body) => {
  // Prettify the body for readability
  // console.log(JSON.stringify(body, undefined, 2));
  let results = body['results'][0];

  console.log(`Address: ${results.formatted_address}`);
  console.log(`Latitude: ${results.geometry.location.lat}`);
  console.log(`Longitude: ${results.geometry.location.lng}`);
});
