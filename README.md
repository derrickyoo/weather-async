# weather-async

An asynchronous weather app using [Node.js](https://nodejs.org),  [Google Maps Platform](https://developers.google.com/maps/documentation/), and
[Dark Sky API](https://darksky.net/dev).

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
git@github.com:derrickyoo/weather-async.git # or clone your own fork
cd weather-async
npm install
```

You will need to register for the
[Google Maps Platform](https://developers.google.com/maps/documentation/) and the
[Dark Sky API](https://darksky.net/dev).

**Add API keys to a `.env` file within the project directory. See `.env.example` for details.**

```sh
# Add valid API keys and rename .env.example to .env
GOOGLE_MAPS_API_KEY="Paste A Valid API_KEY Here"
DARK_SKY_API_KEY="Paste A Valid API_KEY Here"
```

## Commands

Use the following --help flag for available options.

```sh
node app.js --help
```

Below is an example of quering a general or specific address.

```sh
node app.js --address "Tucson"
```
