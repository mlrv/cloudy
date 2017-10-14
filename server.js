const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const env = require('./config/environment');
const port = process.env.PORT || 8000;
const parseWeatherList = require('./lib/parse-weather-list');
const apiKey = env.openWeatherApiKey;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', { display: false, error: null, listGroupedByDay: null });
});

app.post('/', function (req, res) {
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

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

app.listen(port, function () {
    console.log(`Live on ${port}`);
});
