console.log('Starting app in development mode');

let exampleData = require('./googleapis-example.json');

let getGeo = (callback) => {
  let body = exampleData;

  setTimeout(() => {
    callback(body);
  }, 1000);
}

getGeo((body) => {
  console.log(JSON.stringify(body, undefined, 2));
});
