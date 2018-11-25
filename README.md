# weather-async

An asynchronous weather app using [Node.js](https://nodejs.org) and [Google's Geolocation API](https://developers.google.com/maps/documentation/geolocation/intro).

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
git@github.com:derrickyoo/weather-async.git # or clone your own fork
cd weather-async
npm install
```

In order to query the Google Maps API, you will need to register 
[Google Maps Platform](https://developers.google.com/maps/documentation/) and
add the `API_KEY` to a `.env` file within the project. **See `.env.example` for
details.**

## Commands

Use the following --help flag for available options.

```sh
node app.js --help
```

Below is an example of quering a general or specific address.

```sh
node app.js --address "Tucson"
```
