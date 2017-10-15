/**
 * Load required npm modules
 */
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

/**
 * Load env variables and helper functions
 */
const env = require('./config/environment');
const port = process.env.PORT || 8000;
const parseWeatherList = require('./lib/parse-weather-list');
const apiKey = env.openWeatherApiKey;

/**
 * Initialise express server, set view engine as EJS and pass static files from public/
 */
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.set('view engine', 'ejs');

/**
 * Render basic html file at /
 */
app.get('/', function (req, res) {
    res.render('index', { display: false, error: null, listGroupedByDay: null });
});

/**
 * Respond to user clicking on 'Get Weather'
 * An API call is made to the OpenWeatherMap API with the required city,
 * if succesfull, the response is parsed and rendered 
 */
app.post('/', function (req, res) {
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    // Actual API call here, include error handling
    request(url, function (err, response, body) {
        let errorMessage = 'Error, please try again';
        if (err) {
            res.render('index', { display: false, error: errorMessage, listGroupedByDay: null });
        } else {
            try {
                let weather = JSON.parse(body);
                let list = parseWeatherList(weather);
                res.render('index', { display: true, error: null, listGroupedByDay: list });
            } catch (e) {
                res.render('index', { display: false, error: errorMessage, listGroupedByDay: null });
            }
        }
    });
});

/**
 * Make the app listen on the specified port.
 * N.B. port is 8000 when running locally and
 * specified by Heroku in a deployed environment.
 */
app.listen(port, function () {
    console.log(`Live on ${port}`);
});
