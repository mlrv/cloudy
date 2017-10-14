const chai = require('chai');
const expect = chai.expect;

const parseWeatherList = require('../lib/parse-weather-list');
const exampleBody = require('./resources/body');

describe('parseWeatherList', function () {

    it('should return a list of 5 days', function () {
        let numberOfDays = 5;
        expect(parseWeatherList(exampleBody).length).to.deep.eql(numberOfDays);
    });

    it('should return no empty elements', function () {
        parseWeatherList(exampleBody).forEach(function(element) {
            expect(element.elements.length).not.to.deep.eql(0); 
        }, this);
    });

    it('should correctly group elements by day', function () {
        let day = '16 Oct';
        expect(parseWeatherList(exampleBody)[2].day).to.deep.eql(day);
    });

    it('should correctly parse the UNIX timestamp from the API response', function () {
        let timestamp = 1508284800;
        expect(parseWeatherList(exampleBody)[4].elements[0].dt).to.deep.eql(timestamp);
    });

    it('should correctly parse the weather description from the API response', function () {
        let weather = 'few clouds';
        expect(parseWeatherList(exampleBody)[3].elements[1].weather[0].description).to.deep.eql(weather);
    });

});



