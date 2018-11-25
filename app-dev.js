console.log('Starting app in development mode');

const exampleData = require('./googleapis-example.json');

let getGeo = (callback) => {
  let body = exampleData;

  setTimeout(() => {
    callback(body);
  }, 1000);
}

getGeo((body) => {
  // console.log(JSON.stringify(body, undefined, 2));
  let results = body['results'][0];

  console.log(`Address: ${results.formatted_address}`);
  console.log(`Latitude: ${results.geometry.location.lat}`);
  console.log(`Longitude: ${results.geometry.location.lng}`);
});
