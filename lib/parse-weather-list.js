// Load other helper functions
const timeConverter = require('./time-converter');

/**
 * Extract response details to render partial views. The weather 
 * information is split into different groups based on the day 
 * it belongs to. The return array will have the 5-day forecast
 * properly organised and ready to be rendered.
 * 
 * @param {object} body 
 * @returns {array}
 */
function parseWeatherList(body) {
    let listGroupedByDay = []
    let list = body.list;
    let currentDate;
    let currentIndex = 0;
    list.forEach(function (element) {
        let elementDate = timeConverter(element.dt);
        let dayOfMonth = `${elementDate.date} ${elementDate.month}`
        if (elementDate.date !== currentDate) {
            currentDate = timeConverter(element.dt).date;
            let newGroup = {};
            newGroup.day = dayOfMonth;
            newGroup.elements = [];
            listGroupedByDay.push(newGroup);
            currentIndex++;
        }
        listGroupedByDay[currentIndex - 1].elements.push(element);
    }, this);
    return listGroupedByDay;
};

module.exports = parseWeatherList;