// Load required logic and resources
const chai = require('chai');
const expect = chai.expect;
const timeConverter = require('../lib/time-converter');

describe('timeConverter', function () {
    let timestamp = 1507939200;

    it('should not return an empty object', function () {
        expect(timeConverter(timestamp).year).not.to.deep.eql({});
    });

    it('should return the correct year', function () {
        let year = 2017;
        expect(timeConverter(timestamp).year).to.deep.eql(year);
    });

    it('should return the correct month', function () {
        let month = 'Oct';
        expect(timeConverter(timestamp).month).to.deep.eql(month);
    });

    it('should return the correct date', function () {
        let date = 14;
        expect(timeConverter(timestamp).date).to.deep.eql(date);
    });

    it('should return the correct hour', function () {
        let hour = 1;
        expect(timeConverter(timestamp).hour).to.deep.eql(hour);
    });

});



