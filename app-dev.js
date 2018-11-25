console.log('Starting app in development mode');

let exampleData = require('./googleapis-example.json');

let getGeo = (callback) => {
  let data = exampleData;

  setTimeout(() => {
    callback(data);
  }, 1000);
}

getGeo((data) => {
  console.log(JSON.stringify(data, undefined, 2));
});
